import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useAppDispatch } from '@lib/hooks/redux-hooks';
import { Loader2 } from 'lucide-react';
import { userDataActions } from '@store/slices/user-slice';
import { Button } from '@/app/_components/atoms/a-button';
import LabeledInput from '@/app/_components/molecules/m-input-labeled';
import { sendVerificationCode } from '@/app/_services/auth';
import FormFrame from '@/app/_lib/hoc/form';
import Toast from '@/app/_lib/utils/toast';
import UserPrivacyInfoModal from '@/app/_components/molecules/m-user-privacy-info-modal';
import Input from '@/app/_components/atoms/a-input';
import UserEmailVerificationSchema from '@/app/_lib/validations/auth/user-email-verification';
import ToastMessagesList from '../../atoms/a-toast-messages-list';
import { RegistrationStage } from '@/app/(auth & main)/auth/register/page';

interface UserEmailVerificationFormFields {
  email: string;
  userAgreement: boolean;
}

interface InitiateUserEmailVerificationProps {
  // eslint-disable-next-line no-unused-vars
  updateRegistrationStage: (stage: Partial<RegistrationStage>) => void;
}
function InitiateUserEmailVerification({
  updateRegistrationStage,
}: InitiateUserEmailVerificationProps) {
  const dispatch = useAppDispatch();
  const { setRegisteringUserEmail } = userDataActions;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UserEmailVerificationFormFields>({
    resolver: yupResolver(UserEmailVerificationSchema) as any,
    defaultValues: {
      email: '',
      userAgreement: false,
    },
  });

  const onSubmit = async (data: UserEmailVerificationFormFields) => {
    if (data.userAgreement === false) {
      Toast('Please agree to the terms and conditions', { type: 'error' });
      return;
    }
    const sendVerificationCodeData = {
      email: data.email.toLowerCase(),
    };

    try {
      const response = await sendVerificationCode<any>(sendVerificationCodeData);
      if (response.status === 200 && response.data.success === true) {
        dispatch(setRegisteringUserEmail(data.email));
        Toast('Verification code sent to your email', { type: 'success' });
        updateRegistrationStage({ initiateUserEmailVerification: true });
      } else {
        Toast(<ToastMessagesList items={response.data.error} />, { type: 'error' });
      }
    } catch (error) {
      Toast('Something went wrong. Try again', { type: 'error' });
    }
  };

  const handleModal = () => {
    const modal = document.getElementById('user-agreement-and-privacy') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <UserPrivacyInfoModal />
      <FormFrame onHandleSubmit={handleSubmit(onSubmit)}>
        <div className="form w-full flex flex-col space-y-6">
          <p className="font-semibold text-2xl text-black">Let&#39;s get started</p>
          <LabeledInput
            variant="auth2"
            id="email"
            label="Email"
            name="email"
            register={register}
            placeholder="Enter your email address"
            className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]"
            labelTextClassName="text-[#C4C6CB] text-[0.7rem] font-thin top-4 z-20 left-6 "
            variants="auth"
          />

          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="space-x-2 label cursor-pointer">
            <Input
              variant="default"
              sizes="none"
              type="checkbox"
              className="checkbox"
              name="userAgreement"
              register={register}
            />
            <span className="label-text text-black text-sm">
              I agree to Topbotcopier&#39;s{' '}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                onClick={handleModal}
                role="button"
                tabIndex={0}
                className="link link-primary"
                onKeyDown={handleModal}
              >
                User Agreement and Privacy Policy
              </a>
            </span>
          </label>
        </div>
        <div className="pt-8 flex flex-col">
          <Button disabled={isSubmitting} type="submit" variant="primary2" size="xfull">
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin " />
            ) : (
              <span className="font-[600] text-lg group-hover:text-[#5D17EB] text-[#FFFFFF]">
                Proceed
              </span>
            )}
          </Button>
          <div className="flex space-x-1 mt-3 items-center justify-center">
            <p className="text-black text-sm">Already have an account?</p>
            <Link href="/auth/login" className="text-primary">
              Login
            </Link>
          </div>
        </div>
      </FormFrame>
    </>
  );
}

export default InitiateUserEmailVerification;

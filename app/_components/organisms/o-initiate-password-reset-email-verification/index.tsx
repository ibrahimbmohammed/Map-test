import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2 } from 'lucide-react';
import { useAppDispatch } from '@lib/hooks/redux-hooks';
import { userDataActions } from '@store/slices/user-slice';
import { Button } from '@/app/_components/atoms/a-button';
import LabeledInput from '@/app/_components/molecules/m-input-labeled';
import { sendPasswordResetCode } from '@/app/_services/auth';
import FormFrame from '@/app/_lib/hoc/form';
import Toast from '@/app/_lib/utils/toast';
import UserPrivacyInfoModal from '@/app/_components/molecules/m-user-privacy-info-modal';
import ToastMessagesList from '../../atoms/a-toast-messages-list';
import PasswordResetEmailVerificationSchema from '@/app/_lib/validations/auth/password-reset-email-verification';
import { PasswordResetStage } from '@/app/(auth & main)/auth/reset/page';

interface InitiatePasswordResetEmailVerificationFormFields {
  email: string;
}

interface InitiatePasswordResetEmailVerificationProps {
  // eslint-disable-next-line no-unused-vars
  updatePasswordResetStage: (stage: Partial<PasswordResetStage>) => void;
}
function InitiatePasswordResetEmailVerification({
  updatePasswordResetStage,
}: InitiatePasswordResetEmailVerificationProps) {
  const dispatch = useAppDispatch();
  const { setRegisteringUserEmail } = userDataActions;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<InitiatePasswordResetEmailVerificationFormFields>({
    resolver: yupResolver(PasswordResetEmailVerificationSchema) as any,
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: InitiatePasswordResetEmailVerificationFormFields) => {
    const sendPasswordResetCodeData = {
      email: data.email,
    };

    try {
      const response = await sendPasswordResetCode<any>(sendPasswordResetCodeData);
      if (response.status === 200 && response.data.success === true) {
        dispatch(setRegisteringUserEmail(data.email));
        Toast('Reset code sent to your email', { type: 'success' });
        updatePasswordResetStage({ initiatePasswordResetVerification: true });
      } else {
        Toast(<ToastMessagesList items={response.data.error} />, { type: 'error' });
      }
    } catch (error) {
      Toast('Something went wrong. Try again', { type: 'error' });
    }
  };

  return (
    <>
      <UserPrivacyInfoModal />
      <FormFrame onHandleSubmit={handleSubmit(onSubmit)}>
        <div className="form w-full flex flex-col space-y-6">
          <p className="font-semibold text-2xl text-black">Reset Password</p>
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
        </div>
      </FormFrame>
    </>
  );
}

export default InitiatePasswordResetEmailVerification;

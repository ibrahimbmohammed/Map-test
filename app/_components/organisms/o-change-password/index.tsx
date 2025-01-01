import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/_components/atoms/a-button';
import LabeledInput from '@/app/_components/molecules/m-input-labeled';
import { confirmPasswordReset } from '@/app/_services/auth';
import FormFrame from '@/app/_lib/hoc/form';
import Toast from '@/app/_lib/utils/toast';
import UserPrivacyInfoModal from '@/app/_components/molecules/m-user-privacy-info-modal';
import ToastMessagesList from '../../atoms/a-toast-messages-list';
import ChangePasswordSchema from '@/app/_lib/validations/auth/change-password';
import usePasswordToggle from '@/app/_lib/hooks/password-visibility';

interface ChangePasswordFormFields {
  password: string;
  confirmPassword: string;
}

interface ChangePasswordProps {
  passwordResetCode: string;
}

function ChangePassword({ passwordResetCode }: ChangePasswordProps) {
  const [inputType, icon] = usePasswordToggle();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ChangePasswordFormFields>({
    resolver: yupResolver(ChangePasswordSchema) as any,
  });

  const onSubmit = async (data: ChangePasswordFormFields) => {
    const confirmPasswordResetData = {
      token: passwordResetCode,
      password: data.password === data.confirmPassword ? data.password : '',
    };

    try {
      const response = await confirmPasswordReset<any>(confirmPasswordResetData);
      if (response.status === 200 && response.data.success === true) {
        Toast('Password change successful', { type: 'success' });
        router.push('/auth/login');
      }
    } catch (error) {
      if (Array.isArray(error)) {
        Toast(<ToastMessagesList items={error} />, { type: 'error' });
        return;
      }
      Toast('Something went wrong. Try again', { type: 'error' });
    }
  };

  return (
    <>
      <UserPrivacyInfoModal />
      <FormFrame onHandleSubmit={handleSubmit(onSubmit)}>
        <div className="form w-full flex flex-col space-y-6">
          <p className="font-semibold text-2xl text-black">Create New Password</p>
          <LabeledInput
            variant="auth2"
            id="password"
            label="Password"
            name="password"
            register={register}
            type={inputType}
            placeholder="Enter your  password"
            className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]  pt-[0.3rem] pb-[0.1rem]"
            labelTextClassName="text-[#C4C6CB] text-[0.7rem] font-thin top-4 z-20 left-6 "
            variants="auth"
            appendIcon={icon}
            error={errors.password?.message}
          />
          <LabeledInput
            variant="auth2"
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            register={register}
            type={inputType}
            placeholder="Confirm your password"
            className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]  pt-[0.3rem] pb-[0.1rem]"
            labelTextClassName="text-[#C4C6CB] text-[0.7rem] font-thin top-4 z-20 left-6 "
            variants="auth"
            appendIcon={icon}
            error={errors.confirmPassword?.message}
          />
        </div>
        <div className="pt-8 flex flex-col">
          <Button disabled={isSubmitting} type="submit" variant="primary2" size="xfull">
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin " />
            ) : (
              <span className="font-[600] text-lg group-hover:text-[#5D17EB] text-[#FFFFFF]">
                Confirm
              </span>
            )}
          </Button>
        </div>
      </FormFrame>
    </>
  );
}

export default ChangePassword;

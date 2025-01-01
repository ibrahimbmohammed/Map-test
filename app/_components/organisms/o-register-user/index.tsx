import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { Button } from '@/app/_components/atoms/a-button';
import LabeledInput from '@/app/_components/molecules/m-input-labeled';
import { registerUser } from '@/app/_services/auth';
import FormFrame from '@/app/_lib/hoc/form';
import Toast from '@/app/_lib/utils/toast';
import UserPrivacyInfoModal from '@/app/_components/molecules/m-user-privacy-info-modal';
import ToastMessagesList from '../../atoms/a-toast-messages-list';
import YesNoSelectLabeledInput from '../../molecules/m-yes-no-select-input-labeled';
import { useAppSelector } from '@/app/_lib/hooks/redux-hooks';
import RegisterUserSchema from '@/app/_lib/validations/auth/register';
import usePasswordToggle from '@/app/_lib/hooks/password-visibility';

interface UserRegistrationFormFields {
  hasTradingExperience: 'yes' | 'no';
  referralId?: string;
  amountToTradeWith: string;
  name: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

function RegisterUser() {
  const user = useAppSelector((state) => state.userData);
  const router = useRouter();
  const [inputType, icon] = usePasswordToggle();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UserRegistrationFormFields>({
    resolver: yupResolver(RegisterUserSchema) as any,
    defaultValues: {
      hasTradingExperience: 'no',
    },
  });

  const onSubmit = async (data: UserRegistrationFormFields) => {
    const userRegistrationData = {
      email: user.registeringUserEmail?.toLowerCase() as string,
      password: data.password === data.confirmPassword ? data.password : '',
      phone_number: data.phoneNumber,
      full_name: data.name,
      profile: {
        has_trading_experience: data.hasTradingExperience === 'yes',
        ref_id: data.referralId as string,
        amount_range_to_trade_with: data.amountToTradeWith,
      },
    };

    try {
      const response = await registerUser<any>(userRegistrationData);
      if (response.status === 201 && response.data.success === true) {
        Toast('Registration successful', { type: 'success' });
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
          <p className="font-semibold text-2xl text-black">Complete Account Registration</p>
          <YesNoSelectLabeledInput
            variant="auth2"
            id="hasTradingExperience"
            label="Trading Experience"
            name="hasTradingExperience"
            register={register}
            className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]"
            labelTextClassName="text-[#C4C6CB] text-[0.7rem] font-thin top-4 z-20 left-6 "
            variants="auth"
            error={errors.hasTradingExperience?.message}
          />
          <LabeledInput
            variant="auth2"
            id="referralId"
            label="Referral ID (Optional)"
            name="referralId"
            register={register}
            placeholder="Ref ID - if any?"
            className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]"
            labelTextClassName="text-[#C4C6CB] text-[0.7rem] font-thin top-4 z-20 left-6 "
            variants="auth"
            error={errors.referralId?.message}
          />
          <LabeledInput
            variant="auth2"
            id="amountToTradeWith"
            label="Trading Amount"
            name="amountToTradeWith"
            register={register}
            placeholder="How much do you want to trade with?"
            className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]"
            labelTextClassName="text-[#C4C6CB] text-[0.7rem] font-thin top-4 z-20 left-6 "
            variants="auth"
            error={errors.amountToTradeWith?.message}
          />
          <LabeledInput
            variant="auth2"
            id="name"
            label="Name"
            name="name"
            register={register}
            placeholder="Enter your name"
            className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]"
            labelTextClassName="text-[#C4C6CB] text-[0.7rem] font-thin top-4 z-20 left-6 "
            variants="auth"
            error={errors.name?.message}
          />
          <LabeledInput
            variant="auth2"
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            register={register}
            placeholder="Enter your phone number"
            className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]"
            labelTextClassName="text-[#C4C6CB] text-[0.7rem] font-thin top-4 z-20 left-6 "
            variants="auth"
            error={errors.phoneNumber?.message}
          />
          <LabeledInput
            variant="auth2"
            id="password"
            label="Password"
            name="password"
            register={register}
            type={inputType}
            appendIcon={icon}
            placeholder="Enter your password"
            className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]"
            labelTextClassName="text-[#C4C6CB] text-[0.7rem] font-thin top-4 z-20 left-6 "
            variants="auth"
            error={errors.password?.message}
          />
          <LabeledInput
            variant="auth2"
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            register={register}
            type={inputType}
            appendIcon={icon}
            placeholder="Confirm your password"
            className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]"
            labelTextClassName="text-[#C4C6CB] text-[0.7rem] font-thin top-4 z-20 left-6 "
            variants="auth"
            error={errors.confirmPassword?.message}
          />
        </div>
        <div className="pt-8 flex flex-col">
          <Button disabled={isSubmitting} type="submit" variant="primary2" size="xfull">
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin " />
            ) : (
              <span className="font-[600] text-lg group-hover:text-[#5D17EB] text-[#FFFFFF]">
                Create Account
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

export default RegisterUser;

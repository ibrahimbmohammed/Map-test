import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/app/_components/atoms/a-button';

import { sendPasswordResetCode, validatePasswordResetCode } from '@/app/_services/auth';
import Toast from '@/app/_lib/utils/toast';
import { useAppSelector } from '@/app/_lib/hooks/redux-hooks';
import ToastMessagesList from '../../atoms/a-toast-messages-list';
import { PasswordResetStage } from '@/app/(auth & main)/auth/reset/page';

interface VerifyUserEmailProps {
  // eslint-disable-next-line no-unused-vars
  updatePasswordResetStage: (stage: Partial<PasswordResetStage>) => void;
  setPasswordResetCode: Dispatch<SetStateAction<string>>;
}
function ValidatePasswordResetCode({
  updatePasswordResetStage,
  setPasswordResetCode,
}: VerifyUserEmailProps) {
  const user = useAppSelector((state) => state.userData);
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [seconds, setSeconds] = useState(60);
  const [isVerifySubmitting, setIsVerifySubmitting] = useState(false);
  const [minutes, setMinutes] = useState(3);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (Number.isNaN(Number(e.target.value))) return;

    setOtp([...otp.map((num, idx) => (idx === index ? e.target.value : num))]);
    if (e.target.nextSibling) {
      // @ts-ignore
      e.target.nextSibling.focus();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 1) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(60);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const executeSendVerificationCode = async (email: string) => {
    const sendPasswordResetCodeData = {
      email,
    };
    try {
      const response = await sendPasswordResetCode<any>(sendPasswordResetCodeData);
      if (response.status === 200 && response.data.success === true) {
        Toast('Reset code resent to your email', { type: 'success' });
      }
    } catch (error) {
      Toast('Something went wrong. Try again', { type: 'error' });
    }
  };

  const onSubmit = async () => {
    setIsVerifySubmitting(true);
    const verificationData = {
      token: otp.join(''),
    };
    try {
      const response = await validatePasswordResetCode<any>(verificationData);
      if (response.status === 200 && response.data.success === true) {
        Toast('Proceed to change your password', { type: 'success' });
        updatePasswordResetStage({
          validatePasswordResetCode: true,
        });
        setPasswordResetCode(otp.join(''));
        setIsVerifySubmitting(false);
      }
    } catch (error) {
      setIsVerifySubmitting(false);
      if (Array.isArray(error)) {
        Toast(<ToastMessagesList items={error} />, { type: 'error' });
        return;
      }
      Toast('Something went wrong. Try again', { type: 'error' });
    }
  };

  const handleResendVerificationCode = () => {
    // if minutes, and seconds have not expired
    if (minutes > 0 || seconds > 0) {
      Toast('Please wait for the timer to expire, while you check your email', { type: 'warning' });
      return;
    }
    if (user.registeringUserEmail) {
      executeSendVerificationCode(user.registeringUserEmail as string);
      setOtp(new Array(6).fill(''));
      setSeconds(60);
      setMinutes(3);
    }
  };

  return (
    <div>
      <div className="w-full flex flex-col space-y-6">
        <p className="font-semibold text-2xl text-black">Password Reset Code</p>
        <p className="text-lg text-black">
          Enter the six (6) digit passcode sent to your email to reset your password
        </p>
        <div className="flex mx-auto text-center">
          {otp.map((data, index) => {
            return (
              <input
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                type="text"
                name="otp"
                value={data}
                onChange={(e) => handleChange(e, index)}
                maxLength={1}
                onFocus={(e) => e.target.select()}
                className="mx-1 h-16 w-16 rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-xl leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 md:mx-2 md:h-10 md:w-10"
              />
            );
          })}
        </div>
      </div>
      <div className="pt-8 flex flex-col">
        <div className="flex flex-col space-y-4">
          <Button
            onClick={() => onSubmit()}
            disabled={isVerifySubmitting}
            type="button"
            variant="primary2"
            size="xfull"
          >
            {isVerifySubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin " />
            ) : (
              <span className="font-[600] text-lg text-[#FFFFFF]">Verify</span>
            )}
          </Button>
        </div>
        <p className="text-center text-md py-4">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <div className="flex space-x-1 mt-3 items-center justify-center">
          <p className="text-black text-sm">Haven&#39;t received the code?</p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            onClick={handleResendVerificationCode}
            role="button"
            tabIndex={0}
            className="link link-primary"
            onKeyDown={handleResendVerificationCode}
          >
            Resend new code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ValidatePasswordResetCode;

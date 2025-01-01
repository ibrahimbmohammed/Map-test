'use client';

import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import LabeledInput from '@/app/_components/molecules/m-input-labeled';
import FormFrame from '@/app/_lib/hoc/form';
import Toast from '@/app/_lib/utils/toast';
import { Button } from '@/app/_components/atoms/a-button';
import HelpSchema from '@/app/_lib/validations/dashboard/help';
import { getUserFromCookies } from '@/app/_lib/cookies';
import { HelpData, postHelpSupport } from '@/app/_services/trading';
import ToastMessagesList from '../../atoms/a-toast-messages-list';

const HelpAndSupport = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const userData = getUserFromCookies();
  const name = `${userData?.firstName} ${userData?.lastName}`;
  const userEmail = userData?.email;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(HelpSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    } as unknown as HelpData,
  });

  useEffect(() => {
    reset({ name, email: userEmail });
  }, []);

  const onSubmit = async (val: HelpData) => {
    const data = {
      name: val.name,
      email: val.email,
      message: val.message,
    };
    try {
      setLoading(true);
      const response = await postHelpSupport(data);
      if (response.success) {
        Toast('Success!', { type: 'success' });

        setLoading(false);
        reset();
      } else {
        setLoading(false);
        const errorMes = response?.error[0]?.message;
        Toast(`Something Went Wrong!,${errorMes}`, { type: 'error' });
      }
    } catch (error) {
      setLoading(false);
      if (Array.isArray(error)) {
        Toast(<ToastMessagesList items={error} />, { type: 'error' });
        return;
      }
      Toast('Something Went Wrong!', { type: 'error' });
      // handle error
    }
  };
  return (
    <div className="bg-white flex flex-col px-5 rounded-lg border-2 border-solid border-gray-200">
      <div className="self-center flex w-[605px] max-w-full flex-col mt-9 mb-36 max-md:mb-10">
        <div className="text-zinc-800 text-lg font-semibold">Help/Support</div>
        <div className="items-start flex w-full grow flex-col mt-3 max-md:max-w-full">
          <FormFrame className="relative w-full" onHandleSubmit={handleSubmit(onSubmit)}>
            <div className="form w-full flex flex-col space-y-4">
              <LabeledInput
                variant="auth2"
                id="Name"
                label="Name"
                name="name"
                error={errors?.name?.message}
                register={register}
                placeholder="Enter your Name "
                className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]  pt-[0.3rem] pb-[0.1rem]"
                labelTextClassName="text-[#C4C6CB] z-0 text-[0.7rem] font-thin top-4  left-6 "
                variants="auth"
              />
              <LabeledInput
                variant="auth2"
                id="email"
                label="Email"
                name="email"
                error={errors?.email?.message}
                register={register}
                placeholder="Enter your email address"
                className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]  pt-[0.3rem] pb-[0.1rem]"
                labelTextClassName="text-[#C4C6CB] text-[0.7rem] font-thin top-4  left-6 "
                variants="auth"
              />
              <div className="w-full flex flex-col">
                <textarea
                  {...register('message')}
                  id="message"
                  name="message"
                  rows={5}
                  cols={33}
                  className="border border-[#5D17EB] bg-purple-50 rounded-[1.3rem]  pt-[0.8rem] pb-[0.1rem] pl-[1rem] text-black"
                  placeholder="Enter message"
                />
                {errors.message && (
                  <p className="text-red-500 pl-4 text-[0.7rem] font-thin">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
            <div className="pt-4">
              <Button type="submit" variant="primary2" size="xfull">
                <p className="font-[600] text-sm group-hover:text-[#5D17EB] text-[#FFFFFF] ">
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin " /> : 'Send'}
                </p>
              </Button>
            </div>
          </FormFrame>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;

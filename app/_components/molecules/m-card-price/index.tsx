import Image from 'next/image';
import Tick from '@/public/assets/png/Tick.png';
import { PremiumPlansResponse } from '@/app/_lib/types/dashboard/premium';
import Special from '@/public/assets/png/special.png';
import { postUpgradePaymentRequest } from '@/app/_services/trading';
import Toast from '@/app/_lib/utils/toast';
import ToastMessagesList from '../../atoms/a-toast-messages-list';

interface PriceCardProps {
  item: PremiumPlansResponse['result'][0];
}

const PriceCard = ({ item }: PriceCardProps) => {
  const executePostUpgradePaymentRequest = async () => {
    const postUpgradePaymentRequestData = {
      subscription_plan_uuid: item?.uuid,
    };
    try {
      const response = await postUpgradePaymentRequest(postUpgradePaymentRequestData);
      if (response.success === true) {
        Toast(
          "Payment process initiated. You'll be redirected chat with a support staff on WhatsApp",
          { type: 'success' },
        );
        // window.location.href = `https://wa.me/2349030009452?text=Hi, I just made a payment of ${item?.yearlyPrice} for the ${item?.name} plan. My email is ${response.data.data.email}`;
        // execute after 3 seconds
        setTimeout(() => {
          if (item.isSpecial) {
            window.location.href = 'https://wa.link/i87xl7';
            return;
          }
          window.location.href = 'https://wa.link/t0b5ll';
        }, 3000);
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
    <div className="items-center border bg-white group  flex flex-col px-5 rounded-2xl border-solid border-gray-400 border-opacity-50 hover:border-[#FB923C]">
      <div className="items-center self-stretch flex flex-col mt-6 mb-9">
        <div className="items-start self-stretch relative flex flex-col">
          <div className="absolute right-0 -top-7">
            {item?.isSpecial && (
              <Image src={Special?.src} alt="special image" width={50} height={50} />
            )}
          </div>
          <div className="text-neutral-800  text-2xl tracking-tighter max-w-[231px] line-clamp-2 ">
            {item?.name}
          </div>
          <div className="items-start flex max-w-[145px]  gap-0 mt-7">
            <div className="text-violet-700 text-center text-5xl font-semibold leading-[114.29%] self-stretch">
              {item?.yearlyPrice}
            </div>
            <div className="text-gray-500 text-center  text-sm leading-[142.86%] self-center my-auto space-x-1 px-1">
              /
            </div>
            <p className="text-gray-500 text-center  text-sm leading-[142.86%] self-center my-auto">
              yearly
            </p>
          </div>
          <div className="text-gray-500 text-sm leading-[171.43%] max-w-[280px]  mt-7">
            {item?.description}
          </div>
          {item?.promos?.map((promo) => (
            <div key={promo?.uuid} className="flex w-[190px]  items-start gap-1.5 mt-1">
              <Image src={Tick} width={20} height={20} alt="tick" />
              <div className="text-neutral-800 text-base font-semibold leading-[150%] self-center w-[254px] my-auto">
                {promo?.name}
              </div>
            </div>
          ))}
        </div>
        <div className="justify-center items-center border border-[color:var(--Black,#222)] self-center flex w-[213px] group-hover:bg-[#5D17EB]  grow flex-col mt-6 rounded-md border-solid">
          <button
            onClick={executePostUpgradePaymentRequest}
            className="text-neutral-800 text-center text-base w-full h-full font-semibold leading-[150%] self-center group-hover:bg-[#5D17EB] px-5 py-3 "
          >
            <span className="group-hover:text-white">
              {item?.buttonCta ? item?.buttonCta : 'Upgrade now'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;

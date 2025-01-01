/* eslint-disable jsx-a11y/alt-text */

import PhoneSvg from '@/public/assets/svg/phone.svg';
import MailSvg from '@/public/assets/svg/mail.svg';
// import LocationSvg from '@/public/assets/svg/location.svg';

const ContactCardSmall = () => {
  return (
    <div className="w-full bg-white flex flex-col px-5 rounded-lg">
      <div className="items-start self-center flex max-w-full flex-col my-8">
        <div className="items-start flex w-[184px] max-w-full gap-4">
          <img
            loading="lazy"
            src={PhoneSvg.src}
            className="aspect-square object-cover object-center w-5 overflow-hidden self-center max-w-full my-auto"
          />
          <div className="text-slate-900 text-base font-light leading-[148%] tracking-wide self-stretch">
            +447308241996
          </div>
        </div>
        <div className="items-start flex w-full gap-4 mt-8">
          <img
            loading="lazy"
            src={MailSvg.src}
            className="aspect-square object-cover object-center w-5 overflow-hidden self-center max-w-full my-auto"
          />
          <div className="text-slate-900 text-base font-light leading-[148%] tracking-wide self-stretch">
            support@topbotcopier.com
          </div>
        </div>
        {/* <div className="items-start flex w-full gap-4 mt-8">
          <img
            loading="lazy"
            src={LocationSvg.src}
            className="aspect-square object-cover object-center w-5 overflow-hidden max-w-full"
          />
          <div className="text-slate-900 text-base font-light leading-[148%] tracking-wide">
            Top bot Copier, Plot 133,
            <br />
            4th Avenue, Gwarinpa,
            <br />
            Abuja
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactCardSmall;

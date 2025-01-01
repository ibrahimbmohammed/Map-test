import { useRouter } from 'next/navigation';

const Gopremium = () => {
  const router = useRouter();
  return (
    <div className="card rounded-[8px] shadow-md min-h-[20.25rem] max-w-[44.6rem]  bg-[#270A62]/80  text-primary-content">
      <div className="py-5 px-5 flex flex-col space-y-6">
        <p className="font-[500] text-md md:text-[1.6rem] leading-8 text-white">
          Get the most out of Topbotcopier with savings of up to 80% on profit split, performance
          fees, private copier service, and more🚀
        </p>
        <div className="flex flex-col space-y-1 pr-4">
          <p className="font-[100] text-white">
            Premium users can now maximize their earnings by reducing their performance fees.
            Instead of the standard 50%, premium members can pay less, giving them greater control
            over their investments.
          </p>
        </div>

        <div className="card-actions ">
          <button
            onClick={() => router.push('/dashboard/premium')}
            className="btn btn-sm btn-outline border-[#FB923C]  px-6 h-[2.58rem] "
          >
            <p className="font-normal text-xs  text-[#FFFFFF] ">Go Premium</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gopremium;

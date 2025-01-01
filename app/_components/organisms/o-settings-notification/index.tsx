/* eslint-disable jsx-a11y/alt-text */
const Notification = () => {
  return (
    <div className="bg-white flex pr-0 flex-col pl-5 rounded-lg border-2 border-solid border-gray-200">
      <div className="items-start flex w-[825px] max-w-full flex-col mt-8 mb-10 pr-5 max-md:mb-10">
        <div className="text-zinc-800 text-lg font-semibold">Order Notification</div>
        <div className="text-slate-600 text-xs leading-[150%] mt-3 max-md:max-w-full">
          If the order reminder function is enabled, it will need to be reconfirmed everytime an
          order is submitted
        </div>
        <div className="items-start content-start flex-wrap flex w-80 max-w-full flex-col mt-8">
          <div className="flex w-[156px] max-w-full items-start justify-between gap-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/747a4b38-a30d-4e9e-befa-92433c042bc0?apiKey=78d3d1db18ff493abeb06e613aff3679&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/747a4b38-a30d-4e9e-befa-92433c042bc0?apiKey=78d3d1db18ff493abeb06e613aff3679&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/747a4b38-a30d-4e9e-befa-92433c042bc0?apiKey=78d3d1db18ff493abeb06e613aff3679&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/747a4b38-a30d-4e9e-befa-92433c042bc0?apiKey=78d3d1db18ff493abeb06e613aff3679&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/747a4b38-a30d-4e9e-befa-92433c042bc0?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/747a4b38-a30d-4e9e-befa-92433c042bc0?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/747a4b38-a30d-4e9e-befa-92433c042bc0?apiKey=78d3d1db18ff493abeb06e613aff3679&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/747a4b38-a30d-4e9e-befa-92433c042bc0?apiKey=78d3d1db18ff493abeb06e613aff3679&"
              className="aspect-square object-cover object-center w-8 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-zinc-800 text-lg font-semibold self-center my-auto">
              Limit Order
            </div>
          </div>
          <div className="flex w-[172px] max-w-full items-start justify-between gap-5 mt-8">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/07f0bf97-1dad-413e-bcb7-d9ca5ae8f396?apiKey=78d3d1db18ff493abeb06e613aff3679&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/07f0bf97-1dad-413e-bcb7-d9ca5ae8f396?apiKey=78d3d1db18ff493abeb06e613aff3679&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07f0bf97-1dad-413e-bcb7-d9ca5ae8f396?apiKey=78d3d1db18ff493abeb06e613aff3679&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/07f0bf97-1dad-413e-bcb7-d9ca5ae8f396?apiKey=78d3d1db18ff493abeb06e613aff3679&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/07f0bf97-1dad-413e-bcb7-d9ca5ae8f396?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07f0bf97-1dad-413e-bcb7-d9ca5ae8f396?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/07f0bf97-1dad-413e-bcb7-d9ca5ae8f396?apiKey=78d3d1db18ff493abeb06e613aff3679&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/07f0bf97-1dad-413e-bcb7-d9ca5ae8f396?apiKey=78d3d1db18ff493abeb06e613aff3679&"
              className="aspect-square object-cover object-center w-8 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-zinc-800 text-lg font-semibold self-center my-auto">
              Market Order
            </div>
          </div>
          <div className="flex w-[195px] max-w-full items-start justify-between gap-5 mt-8">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/df804683-eb05-42ec-bff0-fd7006f2ce09?apiKey=78d3d1db18ff493abeb06e613aff3679&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df804683-eb05-42ec-bff0-fd7006f2ce09?apiKey=78d3d1db18ff493abeb06e613aff3679&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df804683-eb05-42ec-bff0-fd7006f2ce09?apiKey=78d3d1db18ff493abeb06e613aff3679&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df804683-eb05-42ec-bff0-fd7006f2ce09?apiKey=78d3d1db18ff493abeb06e613aff3679&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df804683-eb05-42ec-bff0-fd7006f2ce09?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df804683-eb05-42ec-bff0-fd7006f2ce09?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df804683-eb05-42ec-bff0-fd7006f2ce09?apiKey=78d3d1db18ff493abeb06e613aff3679&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df804683-eb05-42ec-bff0-fd7006f2ce09?apiKey=78d3d1db18ff493abeb06e613aff3679&"
              className="aspect-square object-cover object-center w-8 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-zinc-800 text-lg font-semibold self-center my-auto">
              Stop-limit order
            </div>
          </div>
          <div className="flex w-full items-start justify-between gap-5 mt-8">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47528ea3-c364-454d-baaf-01e6cda5213a?apiKey=78d3d1db18ff493abeb06e613aff3679&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47528ea3-c364-454d-baaf-01e6cda5213a?apiKey=78d3d1db18ff493abeb06e613aff3679&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47528ea3-c364-454d-baaf-01e6cda5213a?apiKey=78d3d1db18ff493abeb06e613aff3679&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47528ea3-c364-454d-baaf-01e6cda5213a?apiKey=78d3d1db18ff493abeb06e613aff3679&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47528ea3-c364-454d-baaf-01e6cda5213a?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47528ea3-c364-454d-baaf-01e6cda5213a?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47528ea3-c364-454d-baaf-01e6cda5213a?apiKey=78d3d1db18ff493abeb06e613aff3679&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47528ea3-c364-454d-baaf-01e6cda5213a?apiKey=78d3d1db18ff493abeb06e613aff3679&"
              className="aspect-square object-cover object-center w-8 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-zinc-800 text-lg font-semibold self-center grow shrink-0 basis-auto my-auto">
              Auto Borrow/Replay for Margin
            </div>
          </div>
        </div>
        <div className="text-zinc-800 text-lg font-semibold mt-9">Order Notification</div>
        <div className="text-slate-600 text-xs leading-[150%] mt-3 max-md:max-w-full">
          If the order reminder function is enabled, it will need to be reconfirmed everytime an
          order is submitted
        </div>
        <div className="items-start content-start flex-wrap flex w-[210px] max-w-full flex-col mt-8">
          <div className="flex w-[137px] max-w-full items-start justify-between gap-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0b835318-e4a8-4988-a4cd-7f911d48129c?apiKey=78d3d1db18ff493abeb06e613aff3679&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b835318-e4a8-4988-a4cd-7f911d48129c?apiKey=78d3d1db18ff493abeb06e613aff3679&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b835318-e4a8-4988-a4cd-7f911d48129c?apiKey=78d3d1db18ff493abeb06e613aff3679&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b835318-e4a8-4988-a4cd-7f911d48129c?apiKey=78d3d1db18ff493abeb06e613aff3679&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b835318-e4a8-4988-a4cd-7f911d48129c?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b835318-e4a8-4988-a4cd-7f911d48129c?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b835318-e4a8-4988-a4cd-7f911d48129c?apiKey=78d3d1db18ff493abeb06e613aff3679&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b835318-e4a8-4988-a4cd-7f911d48129c?apiKey=78d3d1db18ff493abeb06e613aff3679&"
              className="aspect-square object-cover object-center w-8 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-zinc-800 text-lg font-semibold self-center my-auto">
              Activities
            </div>
          </div>
          <div className="flex w-full items-start justify-between gap-5 mt-8">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b66fdf8-3e4b-4380-aba1-c96b4dd3d0f5?apiKey=78d3d1db18ff493abeb06e613aff3679&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b66fdf8-3e4b-4380-aba1-c96b4dd3d0f5?apiKey=78d3d1db18ff493abeb06e613aff3679&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b66fdf8-3e4b-4380-aba1-c96b4dd3d0f5?apiKey=78d3d1db18ff493abeb06e613aff3679&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b66fdf8-3e4b-4380-aba1-c96b4dd3d0f5?apiKey=78d3d1db18ff493abeb06e613aff3679&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b66fdf8-3e4b-4380-aba1-c96b4dd3d0f5?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b66fdf8-3e4b-4380-aba1-c96b4dd3d0f5?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b66fdf8-3e4b-4380-aba1-c96b4dd3d0f5?apiKey=78d3d1db18ff493abeb06e613aff3679&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b66fdf8-3e4b-4380-aba1-c96b4dd3d0f5?apiKey=78d3d1db18ff493abeb06e613aff3679&"
              className="aspect-square object-cover object-center w-8 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-zinc-800 text-lg font-semibold self-center my-auto">
              Trade Notification
            </div>
          </div>
          <div className="flex w-full items-start justify-between gap-5 mt-8">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6d612264-fc9c-4cf9-80cf-916d99c9e394?apiKey=78d3d1db18ff493abeb06e613aff3679&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d612264-fc9c-4cf9-80cf-916d99c9e394?apiKey=78d3d1db18ff493abeb06e613aff3679&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d612264-fc9c-4cf9-80cf-916d99c9e394?apiKey=78d3d1db18ff493abeb06e613aff3679&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d612264-fc9c-4cf9-80cf-916d99c9e394?apiKey=78d3d1db18ff493abeb06e613aff3679&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d612264-fc9c-4cf9-80cf-916d99c9e394?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d612264-fc9c-4cf9-80cf-916d99c9e394?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d612264-fc9c-4cf9-80cf-916d99c9e394?apiKey=78d3d1db18ff493abeb06e613aff3679&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d612264-fc9c-4cf9-80cf-916d99c9e394?apiKey=78d3d1db18ff493abeb06e613aff3679&"
              className="aspect-square object-cover object-center w-8 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-zinc-800 text-lg font-semibold self-center my-auto">
              System Messaged
            </div>
          </div>
        </div>
        <div className="justify-center items-center bg-violet-700/20 flex w-[290px] max-w-full grow flex-col mt-6 px-5 py-5 rounded-xl">
          <div className="text-purple-50 text-center text-sm font-semibold leading-[148%] tracking-normal self-center">
            Save Changes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

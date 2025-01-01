import { Button } from "@/app/_components/atoms/a-button";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"
import SpinnerIcon from "../../icons/dashboard/main/spinner-svg";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { updateQuote } from "@/app/_store/slices/quote-slice";
import { quoteRequests } from "../../utils/mock";

interface MyModal {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function MyModal({ isOpen, setIsOpen }: MyModal) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false); // To show spinner and sending text
  const [isFinalPanel, setIsFinalPanel] = useState(false);
  const dispatch = useAppDispatch();

  const handleContinue = () => {
    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFinalPanel(true);
      toast.success("RFQ ID sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        //theme: "light",
      });
      dispatch(updateQuote(quoteRequests));
      router.push("/dashboard/procurement/qoute");
    }, 3000); // Delay for 3 seconds
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={() => setIsOpen()}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              {!isFinalPanel && !isSubmitting && (
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  {/* when a user accepts */}

                  <Dialog.Panel className="w-full transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all  lg:w-[35.5rem]">
                    <Dialog.Title
                      as="h3"
                      className="text-[20px] font-[700] leading-6 text-gray-900 pb-3"
                    >
                      Confirmation
                    </Dialog.Title>
                    <div className="mt-2 pb-3">
                      <p className="text-sm font-[300] text-[#475367]">
                        You are about to submit this quote in response to RFQ
                        ID, this will immediately be sent to the client “Westend
                        Clear Hospital”. Are you sure you want to proceed?
                      </p>
                    </div>

                    <div className="w-full pt-3 flex items-center justify-end">
                      <div className="w-[10rem] space-x-[1rem]  flex items-center justify-between">
                        <Button
                          onClick={() => setIsOpen()}
                          type="button"
                          className="w-[4.5rem] h-[35px] flex items-center justify-center"
                          variant="cancelOutline"
                          size="xfull"
                        >
                          <span className="font-normal text-[14px]">
                            cancel
                          </span>
                        </Button>
                        <Button
                          onClick={() => handleContinue()}
                          type="button"
                          variant="primary"
                          className="w-[6rem] h-[35px] flex items-center justify-center"
                          size="xfull"
                        >
                          <span className="font-normal text-[14px] text-[#FFFFFF]">
                            Continue
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Dialog.Panel>
                  {/* first asked this */}
                </Transition.Child>
              )}

              {isFinalPanel ||
                (isSubmitting && (
                  <Transition.Child>
                    <Dialog.Panel className="w-full transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-2xl transition-all  lg:w-[21.5rem] lg:h-[12.5rem]  flex items-center justify-center flex-col">
                      <span className="animate-spin">
                        <SpinnerIcon />
                      </span>
                      <p className="text-[#000] text-sm  pt-3">
                        Sending Quote...
                      </p>
                    </Dialog.Panel>
                  </Transition.Child>
                ))}
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

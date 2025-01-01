import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { Path, UseFormRegister } from 'react-hook-form';
import { cva, VariantProps } from 'class-variance-authority';

const inputVariants = cva('', {
  variants: {
    variant: {
      default: '',
      auth: '-z-0 bg-transparent outline-none w-full text-[#C4C6CB] font-thin  px-6 mt-4',
      auth2: '-z-0 bg-transparent outline-none w-full text-black font-normal  px-6 mt-4',
      primary: 'bg-white outline-none text-[#282828] font-thin hover:bg-gray-50',
      form: ' outline-none bg-white rounded-md border border-[#C4C4C4] pl-4 py-[10px] text-[#282828] font-thin placeholder:text-[0.8rem] ',
      form2: 'bg-white outline-none text-[#282828] font-thin hover:bg-gray-50',
      checkbox:
        "peer relative h-5 w-5 z-10 shrink-0 appearance-none rounded-md border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-transparent hover:ring hover:ring-gray-300 focus:outline-none cursor-pointer",
      search: 'bg-white outline-none text-[#282828] font-thin hover:bg-gray-50',
    },
    sizes: {
      none: '',
      default: 'h-12 py-2',
      full: 'w-full',
      sm: ' h-5 w-5 ',
      xs: 'h-8 px-1.5',
      lg: 'h-11 px-8',
      xl: 'h-[3rem] w-[22rem]',
      xll: 'h-[3.5rem] w-[12rem]',
    },
  },
  defaultVariants: {
    variant: 'default',
    sizes: 'default',
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  prependIcon?: React.ReactNode;
  appendIcon?: React.ReactNode;
  register?: UseFormRegister<any>;
  // eslint-disable-next-line no-unused-vars
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  <T,>(
    {
      className,
      type,
      variant,
      sizes,
      prependIcon,
      appendIcon,
      handleChange,
      handleFocus,
      register,
      error,
      ...props
    }: InputProps,
    ref: React.LegacyRef<HTMLInputElement> | undefined,
  ) => {
    return (
      <div className="relative">
        {prependIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-auto ">
            {prependIcon}
          </div>
        )}
        <input
          type={type}
          className={twMerge(
            inputVariants({ variant, sizes, className }),
            `${prependIcon ? 'pl-12' : ''} placeholder:text-xs md:placeholder:text-base`,
          )}
          ref={ref}
          onChange={(e) => handleChange && handleChange(e)}
          onFocus={(e) => handleFocus && handleFocus(e)}
          {...(register && { ...register(props.name as Path<T>) })}
          {...props}
        />
        {appendIcon && (
          <div className="absolute  inset-y-0 pointer-events-auto right-1 top-2 flex items-center z-40 cursor-pointer pr-3 peer-checked:opacity-0">
            {appendIcon}
          </div>
        )}
      </div>
    );
  },
);

export default Input;

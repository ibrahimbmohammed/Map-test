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
      form: ' outline-none rounded-md border border-[#C4C4C4] pl-4 py-[10px] text-[#282828] font-thin placeholder:text-[0.8rem] ',
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

export interface YesNoSelectInputProps
  extends React.InputHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof inputVariants> {
  register?: UseFormRegister<any>;
  // eslint-disable-next-line no-unused-vars
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  // eslint-disable-next-line no-unused-vars
  handleFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: string;
}
const YesNoSelectInput = React.forwardRef<HTMLSelectElement, YesNoSelectInputProps>(
  <T,>(
    {
      className,
      type,
      variant,
      sizes,
      handleChange,
      handleFocus,
      register,
      error,
      ...props
    }: YesNoSelectInputProps,
    ref: React.LegacyRef<HTMLSelectElement> | undefined,
  ) => {
    return (
      <div className="relative">
        <select
          className={twMerge(inputVariants({ variant, sizes, className }))}
          ref={ref}
          onChange={(e) => handleChange && handleChange(e)}
          onFocus={(e) => handleFocus && handleFocus(e)}
          {...(register && { ...register(props.name as Path<T>) })}
          {...props}
        >
          <option value="" defaultValue="">
            Do you have trading experience?
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    );
  },
);

export default YesNoSelectInput;

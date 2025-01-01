import { twMerge } from 'tailwind-merge';
import { cva, VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import React from 'react';

const buttonVariants = cva("", {
  variants: {
    variant: {
      default: " ",
      primary:
        "border-0 bg-primaryBlueColor rounded-lg px-[10px] py-[1rem] text-white font-light",
      primaryBorder:
        "border border-[1.5px] border-primaryBlueColor bg-white rounded-lg px-[10px] py-[1rem] text-primaryBlueColor font-light",
      primary2:
        " border-0 bg-primaryBlueColor py-2 rounded-lg px-4 text-white font-light",
      cancelOutline:
        "border border-[#E4E7EC] bg-white rounded-lg px-[10px] py-[1rem] text-[#475367]  ",
      secondary: "text-black bg-zinc-100 rounded-[1.3rem]",
      table:
        "text-black bg-zinc-100 rounded-md bg-transparent border border-[#CBC9C9]",
      whitebg: "text-black bg-white rounded-[0.6rem] border",
      secondaryBlue: "text-white bg-[#000080] rounded-[1.3rem]",
      ghost:
        "bg-transparent hover:bg-zinc-100 text-zinc-800 data-[state=open]:bg-transparent data-[state=open]:bg-transparent",
      link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
    },
    size: {
      default: "h-10 py-2 ",
      sm: "h-9 px-2",
      xs: "h-8 px-1.5",
      xfull: " w-full py-[0.6rem] flex item-center justify-center",
      lg: "h-11 px-8",
      xl: "h-[3rem] px-[12rem]",
      xlg: "h-[3.7rem] w-[20rem] sm:w-[24rem] 1lg:w-[27.5rem]  1xl:w-[31rem] 1.5xl:w-[37rem]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type || 'button'}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin  " /> : null}
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

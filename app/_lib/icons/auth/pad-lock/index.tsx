interface PadLockIconProps {
  className?: string;
}

function PadLockIcon({ className }: PadLockIconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_16_246)">
        <path
          d="M12 17V16M17 10H7V8C7 6.67392 7.52678 5.40215 8.46447 4.46447C9.40215 3.52678 10.6739 3 12 3C13.3261 3 14.5979 3.52678 15.5355 4.46447C16.4732 5.40215 17 6.67392 17 8V10ZM18 10H6C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11V14C4.99958 14.9372 5.18736 15.8649 5.5522 16.7282C5.91704 17.5915 6.45152 18.3727 7.12393 19.0255C7.79635 19.6783 8.59301 20.1895 9.46668 20.5287C10.3403 20.8678 11.2732 21.0281 12.21 21C14.0641 20.8969 15.8065 20.0804 17.0722 18.7216C18.3379 17.3627 19.0287 15.5668 19 13.71V11C19 10.7348 18.8946 10.4804 18.7071 10.2929C18.5196 10.1054 18.2652 10 18 10Z"
          stroke="url(#paint0_linear_16_246)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9502 15H12.0502"
          stroke="url(#paint1_linear_16_246)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_16_246"
          x1="2.69986"
          y1="-0.125547"
          x2="25.3277"
          y2="18.6633"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3800" />
          <stop offset="1" stopColor="#EE7930" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_16_246"
          x1="11.9338"
          y1="14.8264"
          x2="12.2037"
          y2="14.8552"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3800" />
          <stop offset="1" stopColor="#EE7930" />
        </linearGradient>
        <clipPath id="clip0_16_246">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PadLockIcon;

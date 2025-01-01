interface WalletProps {
  className?: string;
}

function PlusIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1057_756)">
        <path
          d="M15.8334 11.3337H10.8334V16.3337H9.16675V11.3337H4.16675V9.66699H9.16675V4.66699H10.8334V9.66699H15.8334V11.3337Z"
          fill="url(#paint0_linear_1057_756)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1057_756"
          x1="2.25008"
          y1="2.64153"
          x2="17.1359"
          y2="18.5352"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3800" />
          <stop offset="1" stopColor="#EE7930" />
        </linearGradient>
        <clipPath id="clip0_1057_756">
          <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PlusIcon;

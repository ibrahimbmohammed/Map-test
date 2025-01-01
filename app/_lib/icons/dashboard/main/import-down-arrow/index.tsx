interface WalletProps {
  className: string;
}

function ImportDownArrowIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 10L12 15L7 10"
        stroke="url(#paint0_linear_50_2057)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_50_2057"
          x1="18.7361"
          y1="9.17857"
          x2="13.0642"
          y2="19.803"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3800" />
          <stop offset="1" stopColor="#EE7930" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ImportDownArrowIcon;

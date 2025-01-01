interface WalletProps {
  className: string;
}

function ImportArrowIcon({ className }: WalletProps) {
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
        d="M17 3L21 3V7"
        stroke="url(#paint0_linear_50_2065)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13.89L19 20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20L3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5L10.11 5"
        stroke="url(#paint1_linear_50_2065)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 13L21 3"
        stroke="url(#paint2_linear_50_2065)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_50_2065"
          x1="16.3429"
          y1="2.30556"
          x2="21.4466"
          y2="7.75481"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3800" />
          <stop offset="1" stopColor="#EE7930" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_50_2065"
          x1="0.371429"
          y1="2.22222"
          x2="20.7863"
          y2="24.0192"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3800" />
          <stop offset="1" stopColor="#EE7930" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_50_2065"
          x1="9.35714"
          y1="1.26389"
          x2="22.1164"
          y2="14.887"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3800" />
          <stop offset="1" stopColor="#EE7930" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ImportArrowIcon;

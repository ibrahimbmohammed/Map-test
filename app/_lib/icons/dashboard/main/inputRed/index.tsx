interface WalletProps {
  className?: string;
}

function CircleRed({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="7" stroke="url(#paint0_linear_1301_11939)" strokeWidth="4" />
      <defs>
        <linearGradient
          id="paint0_linear_1301_11939"
          x1="-2.95714"
          y1="-3.125"
          x2="20.0096"
          y2="21.3966"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3800" />
          <stop offset="1" stopColor="#EE7930" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CircleRed;

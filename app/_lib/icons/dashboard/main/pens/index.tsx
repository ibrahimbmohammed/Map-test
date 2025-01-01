interface WalletProps {
  className?: string;
}

function PensIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.0083 6.52495L6.03333 17.4999H2.5V13.9666L13.475 2.99162C13.5525 2.91351 13.6446 2.85151 13.7462 2.80921C13.8477 2.7669 13.9567 2.74512 14.0667 2.74512C14.1767 2.74512 14.2856 2.7669 14.3871 2.80921C14.4887 2.85151 14.5809 2.91351 14.6583 2.99162L17.0083 5.34162C17.0864 5.41908 17.1484 5.51125 17.1907 5.6128C17.233 5.71435 17.2548 5.82327 17.2548 5.93328C17.2548 6.04329 17.233 6.15221 17.1907 6.25376C17.1484 6.35531 17.0864 6.44748 17.0083 6.52495Z"
        stroke="url(#paint0_linear_467_39162)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_467_39162"
          x1="0.0759923"
          y1="0.183514"
          x2="18.9021"
          y2="20.2842"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3800" />
          <stop offset="1" stopColor="#EE7930" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default PensIcon;

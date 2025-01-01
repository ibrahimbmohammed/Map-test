interface WalletProps {
  className?: string;
}

function ClockIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_291_28806)">
        <rect width="32" height="32" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 16C8 11.58 11.576 8 15.996 8C20.416 8 24 11.58 24 16C24 20.42 20.416 24 15.996 24C11.576 24 8 20.42 8 16ZM9.6 16C9.6 19.536 12.464 22.4 16 22.4C19.536 22.4 22.4 19.536 22.4 16C22.4 12.464 19.536 9.6 16 9.6C12.464 9.6 9.6 12.464 9.6 16ZM15.2 12H16.4V16.2L20 18.336L19.396 19.32L15.2 16.8V12Z"
          fill="#8E8EA9"
        />
      </g>
      <defs>
        <clipPath id="clip0_291_28806">
          <rect width="32" height="32" rx="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ClockIcon;

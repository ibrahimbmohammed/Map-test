interface WalletProps {
  className: string;
}

function WalletIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.08667 5L7.89333 1L11.1667 3.29333L9.97333 5H5.08667ZM5.08667 5H1.75333L4.56 1L6.79333 2.56667L5.08667 5ZM12.5 5.66667V12.3333C12.5 12.5101 12.4298 12.6797 12.3047 12.8047C12.1797 12.9298 12.0101 13 11.8333 13H1.16667C0.989856 13 0.820286 12.9298 0.695262 12.8047C0.570238 12.6797 0.5 12.5101 0.5 12.3333V5.66667C0.5 5.48986 0.570238 5.32029 0.695262 5.19526C0.820286 5.07024 0.989856 5 1.16667 5H11.8333C12.0101 5 12.1797 5.07024 12.3047 5.19526C12.4298 5.32029 12.5 5.48986 12.5 5.66667Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WalletIcon;

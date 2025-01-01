interface WalletProps {
  className?: string;
}

function CircleBlueIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="7" stroke="#000080" strokeWidth="4" />
    </svg>
  );
}

export default CircleBlueIcon;

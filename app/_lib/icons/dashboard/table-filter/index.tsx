interface WalletProps {
  className?: string;
}

function TableFilterIcon({ className }: WalletProps) {
  return (
    <svg
      className={`${className}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
        stroke="#6B788E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// #6B788E
export default TableFilterIcon;

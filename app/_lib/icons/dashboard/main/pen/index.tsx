interface WalletProps {
  className?: string;
}

function PenIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.50015C9.13132 1.36883 9.28722 1.26466 9.4588 1.19359C9.63038 1.12252 9.81428 1.08594 10 1.08594C10.1857 1.08594 10.3696 1.12252 10.5412 1.19359C10.7128 1.26466 10.8687 1.36883 11 1.50015C11.1313 1.63147 11.2355 1.78737 11.3066 1.95895C11.3776 2.13054 11.4142 2.31443 11.4142 2.50015C11.4142 2.68587 11.3776 2.86977 11.3066 3.04135C11.2355 3.21293 11.1313 3.36883 11 3.50015L4.25 10.2502L1.5 11.0002L2.25 8.25015L9 1.50015Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PenIcon;

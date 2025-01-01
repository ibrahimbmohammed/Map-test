interface WalletProps {
  className?: string;
}

function CloudIcon({ className }: WalletProps) {
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
        d="M5.99998 15.1102C5.11357 14.5212 4.38298 13.7264 3.87068 12.7936C3.35838 11.8608 3.07961 10.8177 3.05822 9.75374C3.03682 8.68973 3.27343 7.63636 3.74782 6.68372C4.2222 5.73107 4.92025 4.90748 5.78227 4.28338C6.64429 3.65928 7.64463 3.25323 8.69776 3.09996C9.75089 2.94668 10.8255 3.05074 11.8296 3.40324C12.8338 3.75573 13.7376 4.34617 14.4639 5.12407C15.1901 5.90198 15.7172 6.8442 16 7.87016C16.2736 7.81832 16.5515 7.79154 16.83 7.79016C17.8369 7.79289 18.8091 8.15811 19.5688 8.81899C20.3284 9.47986 20.8247 10.3922 20.9667 11.389C21.1088 12.3858 20.8871 13.4005 20.3423 14.2472C19.7975 15.094 18.966 15.7163 18 16.0002"
        stroke="#FF7100"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21.18V12.18M15 15L12 12L8.79004 15.18"
        stroke="#FF7100"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CloudIcon;

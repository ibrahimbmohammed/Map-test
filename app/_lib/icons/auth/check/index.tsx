interface CheckIconProps {
  className?: string;
}

function CheckIcon({ className }: CheckIconProps) {
  return (
    <svg
      className={className}
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66669 4L3.1415 5.65916C3.53929 6.10668 4.23853 6.10668 4.63632 5.65916L8.33335 1.5"
        stroke="#D7D7D7"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CheckIcon;

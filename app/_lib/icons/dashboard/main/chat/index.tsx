interface ChatIconProps {
  className?: string;
}

function ChatIcon({ className }: ChatIconProps) {
  return (
    <svg
      className={className}
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.405 7.615L9 10L6.525 8.76C6.03246 8.91975 5.5178 9.00075 5 9C2.5 9 0.5 7.21 0.5 5C0.5 2.79 2.5 1 5 1C7.5 1 9.5 2.79 9.5 5C9.49178 5.98148 9.09858 6.9205 8.405 7.615Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChatIcon;

interface WalletProps {
  className?: string;
}

function HomeIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9601 8.68997C14.9226 8.78128 14.8589 8.85944 14.777 8.91461C14.6951 8.96978 14.5988 8.99948 14.5001 8.99997H13.0001V14C13.0001 14.3978 12.842 14.7793 12.5607 15.0606C12.2794 15.3419 11.8979 15.5 11.5001 15.5H9.50007C9.36746 15.5 9.24028 15.4473 9.14652 15.3535C9.05275 15.2598 9.00007 15.1326 9.00007 15V12C9.00007 11.8674 8.94739 11.7402 8.85362 11.6464C8.75986 11.5526 8.63268 11.5 8.50007 11.5H7.50007C7.36746 11.5 7.24028 11.5526 7.14652 11.6464C7.05275 11.7402 7.00007 11.8674 7.00007 12V15C7.00007 15.1326 6.94739 15.2598 6.85362 15.3535C6.75985 15.4473 6.63268 15.5 6.50007 15.5H4.50007C4.10225 15.5 3.72071 15.3419 3.43941 15.0606C3.15811 14.7793 3.00007 14.3978 3.00007 14V8.99997H1.50007C1.40136 8.99948 1.305 8.96978 1.22314 8.91461C1.14128 8.85944 1.07758 8.78128 1.04007 8.68997C1.00178 8.59891 0.991319 8.49856 1.01001 8.40156C1.02869 8.30457 1.07569 8.21528 1.14507 8.14497L7.64507 1.64497C7.69155 1.59811 7.74685 1.56091 7.80778 1.53552C7.86871 1.51014 7.93406 1.49707 8.00007 1.49707C8.06608 1.49707 8.13143 1.51014 8.19236 1.53552C8.25329 1.56091 8.30859 1.59811 8.35507 1.64497L14.8551 8.14497C14.9244 8.21528 14.9714 8.30457 14.9901 8.40156C15.0088 8.49856 14.9984 8.59891 14.9601 8.68997Z"
        fill="#737B8B"
      />
    </svg>
  );
}

export default HomeIcon;

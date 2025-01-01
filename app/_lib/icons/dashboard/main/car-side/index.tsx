interface WalletProps {
  className?: string;
}

function CarSideIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4267 10.0001H6.56671M5.16671 8.66675C4.903 8.66675 4.64521 8.74495 4.42595 8.89146C4.20668 9.03796 4.03579 9.2462 3.93487 9.48984C3.83395 9.73347 3.80755 10.0016 3.85899 10.2602C3.91044 10.5188 4.03743 10.7564 4.2239 10.9429C4.41037 11.1294 4.64795 11.2563 4.90659 11.3078C5.16523 11.3592 5.43332 11.3328 5.67695 11.2319C5.92059 11.131 6.12883 10.9601 6.27533 10.7408C6.42184 10.5216 6.50004 10.2638 6.50004 10.0001C6.50004 9.64646 6.35957 9.30732 6.10952 9.05727C5.85947 8.80722 5.52033 8.66675 5.16671 8.66675ZM11.8334 8.66675C11.5697 8.66675 11.3119 8.74495 11.0926 8.89146C10.8733 9.03796 10.7025 9.2462 10.6015 9.48984C10.5006 9.73347 10.4742 10.0016 10.5257 10.2602C10.5771 10.5188 10.7041 10.7564 10.8906 10.9429C11.077 11.1294 11.3146 11.2563 11.5733 11.3078C11.8319 11.3592 12.1 11.3328 12.3436 11.2319C12.5873 11.131 12.7955 10.9601 12.942 10.7408C13.0885 10.5216 13.1667 10.2638 13.1667 10.0001C13.1667 9.64646 13.0262 9.30732 12.7762 9.05727C12.5261 8.80722 12.187 8.66675 11.8334 8.66675Z"
        stroke="#FF8B00"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.76668 10.0001H3.16668C2.98987 10.0001 2.8203 9.92985 2.69528 9.80483C2.57025 9.6798 2.50002 9.51023 2.50002 9.33342V7.74675C2.49915 7.62251 2.53302 7.5005 2.59781 7.39448C2.6626 7.28846 2.75573 7.20266 2.86668 7.14675L3.83335 6.66675C4.24518 6.05249 4.80164 5.54883 5.45379 5.20009C6.10595 4.85134 6.83381 4.66819 7.57335 4.66675H8.33335C9.30868 4.6563 10.2594 4.97319 11.0333 5.56675L12.5 6.66675L14.0467 7.18009C14.1847 7.22647 14.3037 7.31675 14.3855 7.43713C14.4674 7.55751 14.5076 7.70138 14.5 7.84675V9.33342C14.5 9.51023 14.4298 9.6798 14.3048 9.80483C14.1797 9.92985 14.0102 10.0001 13.8334 10.0001H13.2267"
        stroke="#FF8B00"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CarSideIcon;

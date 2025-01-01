// eslint-disable-next-line import/no-unresolved
import { IconProps } from './Icon.types';

function InnerIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="11.5" x2="5" y2="11.5" />
      <circle cx="12" cy="12" r="3" />
      <line x1="19" y1="11.5" x2="24" y2="11.5" />
    </svg>
  );
}

export default InnerIcon;

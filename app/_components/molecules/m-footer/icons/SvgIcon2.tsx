interface SvgIcon1Props {
  className?: string;
}

function SvgIcon2({ className }: SvgIcon1Props) {
  return (
    <div className={`w-6 h-6 text-white flex grow-0 shrink-0 basis-auto ${className}`}>
      <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
        <g
          id="icon / jam-icons / outline &amp; logos / facebook"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector_199"
            d="M9.34585,5.88v2.75h-2.02v3.36h2.02v9.99h4.13v-9.99h2.77c0,0 0.26,-1.61 0.39,-3.37h-3.14v-2.3c0,-0.34 0.45,-0.8 0.89,-0.8h2.26v-3.5h-3.07c-4.34,0 -4.23,3.36 -4.23,3.86z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
}

export default SvgIcon2;

interface SvgIcon1Props {
  className?: string;
}

function SvgIcon1({ className }: SvgIcon1Props) {
  return (
    <div className={`w-6 h-6 text-white flex grow-0 shrink-0 basis-auto ${className}`}>
      <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
        <g id="icon / jam-icons / outline &amp; logos / youtube" xmlns="http://www.w3.org/2000/svg">
          <path
            id="Vector_198"
            d="M17.83,5.015h-11.67c-2.28,0 -4.14,1.84 -4.14,4.1v5.77c0,2.27 1.86,4.1 4.14,4.1h11.67c2.29,0 4.15,-1.83 4.15,-4.1v-5.77c0,-2.26 -1.86,-4.1 -4.15,-4.1zM15.03,12.285l-5.46,2.57c-0.03,0.02 -0.07,0.03 -0.1,0.02c-0.04,0 -0.08,-0.01 -0.11,-0.03c-0.03,-0.02 -0.06,-0.05 -0.07,-0.08c-0.02,-0.03 -0.03,-0.07 -0.03,-0.1v-5.31c0,-0.04 0.01,-0.08 0.03,-0.11c0.02,-0.03 0.04,-0.06 0.07,-0.08c0.04,-0.02 0.07,-0.03 0.11,-0.03c0.04,0 0.07,0.01 0.11,0.02l5.45,2.74c0.04,0.02 0.07,0.05 0.09,0.08c0.02,0.04 0.03,0.08 0.03,0.12c0,0.04 -0.01,0.08 -0.03,0.11c-0.02,0.03 -0.05,0.06 -0.09,0.08z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
}

export default SvgIcon1;

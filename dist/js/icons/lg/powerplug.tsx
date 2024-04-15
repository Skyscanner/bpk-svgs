import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const powerplugSvg = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="1.5rem"
      height="1.5rem"
      fill={props.fill}
      {...props}
    >
      <path d="M6 1a1 1 0 0 0-1 1v3H4a1 1 0 0 0-1 1v5a6 6 0 0 0 5 5.917V19a4.4 4.4 0 0 0 .743 2.448A3.77 3.77 0 0 0 12 23a3.77 3.77 0 0 0 3.285-1.558A4.4 4.4 0 0 0 16 19a2.34 2.34 0 0 1 .53-1.25A1.84 1.84 0 0 1 18 17h2a1 1 0 0 0 0-2h-2a3.83 3.83 0 0 0-3.03 1.5A4.28 4.28 0 0 0 14 19a2.4 2.4 0 0 1-.363 1.308A1.79 1.79 0 0 1 12 21a1.79 1.79 0 0 1-1.618-.698A2.4 2.4 0 0 1 10 19v-2.083A6 6 0 0 0 15 11V6a1 1 0 0 0-1-1h-1V2a1 1 0 0 0-2 0v3H7V2a1 1 0 0 0-1-1" />
    </svg>
  );
};
export default powerplugSvg;

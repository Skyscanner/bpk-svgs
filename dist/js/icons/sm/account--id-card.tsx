import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const accountIdCardSvg = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="1rem"
      height="1rem"
      fill={props.fill}
      {...props}
    >
      <path d="M19.5 1.5h-15a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-15a3 3 0 0 0-3-3m-12 7.097a.9.9 0 0 1 .286-.748A2.23 2.23 0 0 1 9 7.5a2.15 2.15 0 0 1 1.196.349.93.93 0 0 1 .304.771v1.715a1.508 1.508 0 1 1-3 0zM12 16.5H6A1.75 1.75 0 0 1 4.5 15a.83.83 0 0 1 .572-.754A10.4 10.4 0 0 1 9 13.5a10.6 10.6 0 0 1 3.947.747.795.795 0 0 1 .553.753 1.75 1.75 0 0 1-1.5 1.5m6.75-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 0 1.5m0-3h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 0 1.5" />
    </svg>
  );
};
export default accountIdCardSvg;

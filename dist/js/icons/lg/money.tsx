import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const moneySvg = (props: Props) => {
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
      <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M6 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1m6 2a3 3 0 1 1 3-3 3 3 0 0 1-3 3m6-2a1 1 0 1 1 1-1 1 1 0 0 1-1 1" />
    </svg>
  );
};
export default moneySvg;

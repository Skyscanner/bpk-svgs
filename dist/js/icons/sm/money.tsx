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
      width="1rem"
      height="1rem"
      fill={props.fill}
      {...props}
    >
      <path d="M21 3H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M4.5 13.5A1.5 1.5 0 1 1 6 12a1.5 1.5 0 0 1-1.5 1.5M12 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3m7.5-1.5A1.5 1.5 0 1 1 21 12a1.5 1.5 0 0 1-1.5 1.5" />
    </svg>
  );
};
export default moneySvg;

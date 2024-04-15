import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const chevronUpSvg = (props: Props) => {
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
      <path d="M4.299 16.207a1 1 0 0 0 1.414 0l6.293-6.293 6.293 6.293a1 1 0 0 0 1.414-1.414l-7-7a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 0 1.414" />
    </svg>
  );
};
export default chevronUpSvg;

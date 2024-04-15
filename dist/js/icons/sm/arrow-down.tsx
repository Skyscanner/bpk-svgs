import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const arrowDownSvg = (props: Props) => {
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
      <path d="M16.537 8.25H7.463a1.358 1.358 0 0 0-1.11 2.251l4.354 4.77a1.53 1.53 0 0 0 2.184.04l4.718-4.77a1.357 1.357 0 0 0-1.072-2.291" />
    </svg>
  );
};
export default arrowDownSvg;

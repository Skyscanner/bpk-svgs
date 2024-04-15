import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const arrowRightSvg = (props: Props) => {
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
      <path d="M8.25 7.463v9.074a1.358 1.358 0 0 0 2.251 1.11l4.77-4.354a1.53 1.53 0 0 0 .04-2.184l-4.77-4.718A1.357 1.357 0 0 0 8.25 7.463" />
    </svg>
  );
};
export default arrowRightSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const arrowLeftSvg = (props: Props) => {
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
      <path d="M15.75 16.537V7.463a1.358 1.358 0 0 0-2.251-1.11l-4.77 4.354a1.53 1.53 0 0 0-.04 2.184l4.77 4.718a1.357 1.357 0 0 0 2.291-1.072" />
    </svg>
  );
};
export default arrowLeftSvg;

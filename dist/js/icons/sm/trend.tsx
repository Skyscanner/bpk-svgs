import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const trendSvg = (props: Props) => {
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
      <path d="M15.006 4.499H22.5a1.5 1.5 0 0 1 1.49 1.325l.01.175v7.5a1.5 1.5 0 0 1-2.99.175l-.01-.175-.002-3.88-7.938 7.94a1.5 1.5 0 0 1-1.98.126l-.14-.124-3.444-3.44-4.932 4.936a1.5 1.5 0 0 1-2.247-1.98l.125-.14 5.992-5.995a1.5 1.5 0 0 1 1.98-.126l.14.124L12 14.379l6.877-6.88h-3.871a1.5 1.5 0 0 1-1.49-1.325l-.01-.175a1.5 1.5 0 0 1 1.325-1.49z" />
    </svg>
  );
};
export default trendSvg;

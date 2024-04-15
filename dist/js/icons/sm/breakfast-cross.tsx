import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const breakfastCrossSvg = (props: Props) => {
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
      <path d="M3 3.75a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1.5c6 0 6 9 0 9v1.5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm15 4.5v3a1.5 1.5 0 0 0 0-3M8.56 5.69c-1.363-1.463-3.558.582-2.195 2.045q.036.039.075.075l1.939 1.94-1.94 1.94c-1.365 1.414.709 3.486 2.122 2.12l1.939-1.939 1.94 1.94c1.414 1.365 3.486-.709 2.12-2.122L12.622 9.75l1.94-1.94c1.365-1.414-.709-3.486-2.122-2.12L10.5 7.628l-1.94-1.94zM3 20.25a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3z" />
    </svg>
  );
};
export default breakfastCrossSvg;

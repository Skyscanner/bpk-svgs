import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const breakfastTickSvg = (props: Props) => {
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
      <path d="M3 4.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3V6a4.5 4.5 0 1 1 0 9v1.5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm16.5 6A1.5 1.5 0 0 0 18 9v3a1.5 1.5 0 0 0 1.5-1.5m-4.939-.44a1.5 1.5 0 1 0-2.122-2.12L9.75 10.631 8.561 9.44a1.5 1.5 0 1 0-2.122 2.12l2.251 2.254a1.5 1.5 0 0 0 2.123 0zM3 21a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3z" />
    </svg>
  );
};
export default breakfastTickSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const heartSvg = (props: Props) => {
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
      <path d="M10.23 4.072a4.77 4.77 0 0 0-6.62.577 5.51 5.51 0 0 0-1.39 5.408c.855 3.72 5.28 7.895 8.62 10.537a1.86 1.86 0 0 0 2.32 0c3.34-2.642 7.765-6.816 8.62-10.537a5.52 5.52 0 0 0-1.389-5.408 4.77 4.77 0 0 0-6.62-.577l-1.126.95a1 1 0 0 1-1.29 0z" />
    </svg>
  );
};
export default heartSvg;

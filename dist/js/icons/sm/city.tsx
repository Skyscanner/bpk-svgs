import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const citySvg = (props: Props) => {
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
      <path d="M18 6h-5.25a.75.75 0 0 1-.75-.75V4.5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3V21a1.5 1.5 0 0 0 3 0V5.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V21a1.5 1.5 0 0 0 3 0v-.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75V21a1.5 1.5 0 0 0 3 0V9a3 3 0 0 0-3-3m-1.5 10.5h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 0 3m0-4.5h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 0 3" />
    </svg>
  );
};
export default citySvg;

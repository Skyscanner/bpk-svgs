import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const chevronRightSvg = (props: Props) => {
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
      <path d="M7.8 4.287a1 1 0 0 0 0 1.414l6.292 6.293L7.8 18.287a1 1 0 0 0 1.39 1.438l.024-.024 7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0" />
    </svg>
  );
};
export default chevronRightSvg;

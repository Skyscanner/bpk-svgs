import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const chevronLeftSvg = (props: Props) => {
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
      <path d="M16.207 4.299a1 1 0 0 1 0 1.414l-6.293 6.293 6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0" />
    </svg>
  );
};
export default chevronLeftSvg;

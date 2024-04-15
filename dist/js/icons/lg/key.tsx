import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const keySvg = (props: Props) => {
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
      <path d="m21.713 20.293-7.958-7.958a6.5 6.5 0 1 0-1.414 1.414l2.751 2.75-2.293 2.294a1 1 0 0 0 1.414 1.414l2.293-2.293.85.849-1.539 1.512a1 1 0 1 0 1.378 1.45l1.574-1.547 1.53 1.529a1 1 0 0 0 1.414-1.414M8.506 13a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5" />
    </svg>
  );
};
export default keySvg;

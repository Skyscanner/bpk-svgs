import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const deviceWideSvg = (props: Props) => {
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
      <path d="M1 19.5a1 1 0 0 1 1-1h20a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1m2-13a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
    </svg>
  );
};
export default deviceWideSvg;

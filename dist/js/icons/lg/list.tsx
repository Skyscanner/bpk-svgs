import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const listSvg = (props: Props) => {
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
      <path d="M4 8a2 2 0 1 0-2-2 2 2 0 0 0 2 2m0 6a2 2 0 1 0-2-2 2 2 0 0 0 2 2m2 4a2 2 0 1 1-2-2 2 2 0 0 1 2 2M9 5a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2zm-1 7a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1m1 5a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2z" />
    </svg>
  );
};
export default listSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const menuHorizontalSvg = (props: Props) => {
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
      <path d="M6 12a3 3 0 1 1-3-3 3 3 0 0 1 3 3m9 0a3 3 0 1 1-3-3 3 3 0 0 1 3 3m6 3a3 3 0 1 0-3-3 3 3 0 0 0 3 3" />
    </svg>
  );
};
export default menuHorizontalSvg;

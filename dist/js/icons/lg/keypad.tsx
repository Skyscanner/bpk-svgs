import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const keypadSvg = (props: Props) => {
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
      <path d="M7 5a2 2 0 1 1-2-2 2 2 0 0 1 2 2m0 7a2 2 0 1 1-2-2 2 2 0 0 1 2 2m-2 9a2 2 0 1 0-2-2 2 2 0 0 0 2 2m9-16a2 2 0 1 1-2-2 2 2 0 0 1 2 2m-2 9a2 2 0 1 0-2-2 2 2 0 0 0 2 2m2 5a2 2 0 1 1-2-2 2 2 0 0 1 2 2m5-12a2 2 0 1 0-2-2 2 2 0 0 0 2 2m2 5a2 2 0 1 1-2-2 2 2 0 0 1 2 2m-2 9a2 2 0 1 0-2-2 2 2 0 0 0 2 2" />
    </svg>
  );
};
export default keypadSvg;

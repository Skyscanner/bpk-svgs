import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const nativeIosCloseSvg = (props: Props) => {
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
      <path d="M5.287 5.305a1 1 0 0 1 1.414 0l5.293 5.293 5.293-5.293a1 1 0 0 1 1.438 1.39l-.024.024-5.293 5.293 5.293 5.293a1 1 0 0 1-1.414 1.414l-5.293-5.293L6.7 18.72a1 1 0 0 1-1.414-1.414l5.293-5.293L5.287 6.72a1 1 0 0 1 0-1.414z" />
    </svg>
  );
};
export default nativeIosCloseSvg;

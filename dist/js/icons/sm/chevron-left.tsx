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
      width="1rem"
      height="1rem"
      fill={props.fill}
      {...props}
    >
      <path d="M15.905 19.113a1.496 1.496 0 0 1-2.008 0l-5.948-6.397a1 1 0 0 1-.004-1.358l6.012-6.532a1.427 1.427 0 0 1 1.948.138 1.57 1.57 0 0 1 .103 1.997L11.37 12.04l4.535 4.97a1.72 1.72 0 0 1 0 2.104z" />
    </svg>
  );
};
export default chevronLeftSvg;
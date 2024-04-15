import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const navigationSvg = (props: Props) => {
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
      <path d="M12 2a10 10 0 1 0 10 10A10.03 10.03 0 0 0 12 2m4.684 5.949-1.868 5.602a2 2 0 0 1-1.265 1.265L7.95 16.684a.5.5 0 0 1-.633-.633l1.868-5.602a2 2 0 0 1 1.265-1.265h-.001l5.602-1.868a.5.5 0 0 1 .633.633M12.7 11.3a.99.99 0 1 1-1.4 1.4.99.99 0 1 1 1.4-1.4" />
    </svg>
  );
};
export default navigationSvg;

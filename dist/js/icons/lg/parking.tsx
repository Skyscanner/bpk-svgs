import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const parkingSvg = (props: Props) => {
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
      <path d="M12 2a10 10 0 1 0 10 10A10.03 10.03 0 0 0 12 2m1.5 12H10v2a1 1 0 0 1-2 0V7h5.5a3.5 3.5 0 0 1 0 7m1.5-3.5a1.5 1.5 0 0 1-1.5 1.5H10V9h3.5a1.5 1.5 0 0 1 1.5 1.5" />
    </svg>
  );
};
export default parkingSvg;

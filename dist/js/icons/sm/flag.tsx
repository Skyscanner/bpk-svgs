import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const flagSvg = (props: Props) => {
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
      <path d="M7.402 14.714C6.855 14.882 6 14.426 6 13.86V3.568a1.56 1.56 0 0 1 .858-1.514 8.3 8.3 0 0 1 3.267-.554 10.5 10.5 0 0 1 4.125 1.071 10.5 10.5 0 0 0 4.125 1.072 9.3 9.3 0 0 0 2.723-.357c.547-.168 1.402.288 1.402.853v10.293a1.56 1.56 0 0 1-.858 1.514 8.3 8.3 0 0 1-3.267.554 10.5 10.5 0 0 1-4.125-1.071 10.5 10.5 0 0 0-4.125-1.072 9.3 9.3 0 0 0-2.723.357M3 1.5A1.5 1.5 0 0 0 1.5 3v18a1.5 1.5 0 0 0 3 0V3A1.5 1.5 0 0 0 3 1.5" />
    </svg>
  );
};
export default flagSvg;

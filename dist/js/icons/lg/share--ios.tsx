import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const shareIosSvg = (props: Props) => {
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
      <path d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414v8.589a1 1 0 0 0 2 0v-8.59l3.293 3.294a1 1 0 0 0 1.414 0" />
      <path d="M5 15a1 1 0 0 0-2 0v3a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-3a1 1 0 0 0-2 0v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
    </svg>
  );
};
export default shareIosSvg;

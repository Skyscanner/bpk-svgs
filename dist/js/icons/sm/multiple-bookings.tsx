import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const multipleBookingsSvg = (props: Props) => {
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
      <path d="M3 1.5a3 3 0 0 0-3 3v.75a.925.925 0 0 0 .742.843 3 3 0 0 1 2.162 3.652 3 3 0 0 1-2.162 2.162.925.925 0 0 0-.742.843v.75a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-.75a.925.925 0 0 0-.742-.843 3.001 3.001 0 0 1 0-5.814A.925.925 0 0 0 24 5.25V4.5a3 3 0 0 0-3-3zM1.5 18.75a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1-.75-.75m1.5 3a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75" />
    </svg>
  );
};
export default multipleBookingsSvg;

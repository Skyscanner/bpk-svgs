import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const childSeatSvg = (props: Props) => {
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
      <path d="M1.527 2.188c-.139-.276.28-.688.697-.688 1.95 0 2.91.688 3.776 3 1.065 2.418 2.015 5.056 2.576 6.693A1.2 1.2 0 0 0 9.72 12h6.78a3.226 3.226 0 0 1 3 3v1.5A1.61 1.61 0 0 1 18 18H6.3a2.89 2.89 0 0 1-2.543-2.338zM3 19.5a1.5 1.5 0 0 0 0 3h18a1.5 1.5 0 0 0 0-3z" />
    </svg>
  );
};
export default childSeatSvg;

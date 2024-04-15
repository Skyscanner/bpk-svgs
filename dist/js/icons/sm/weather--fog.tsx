import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const weatherFogSvg = (props: Props) => {
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
      <path d="M17.526 16.5H5.921A4.52 4.52 0 0 1 1.5 11.885a4.595 4.595 0 0 1 3.444-4.497A1.61 1.61 0 0 0 6.12 6.231 6.135 6.135 0 0 1 12 1.5a6.08 6.08 0 0 1 5.593 3.856 1.5 1.5 0 0 0 1.034.887 5.15 5.15 0 0 1 3.873 5.065 5.087 5.087 0 0 1-4.974 5.192M3 18.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75M6.75 21a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" />
    </svg>
  );
};
export default weatherFogSvg;

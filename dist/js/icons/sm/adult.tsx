import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const adultSvg = (props: Props) => {
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
      <path d="M10.8 1.774A2.64 2.64 0 0 1 12 1.5a2.56 2.56 0 0 1 1.196.28.69.69 0 0 1 .304.62v2.262A1.377 1.377 0 0 1 12 6a1.377 1.377 0 0 1-1.5-1.338V2.4a.68.68 0 0 1 .3-.626M15 13.835V9.452a1.51 1.51 0 0 0-.536-1.277 4.44 4.44 0 0 0-2.429-.675 4.58 4.58 0 0 0-2.5.784A1.55 1.55 0 0 0 9 9.568v4.383a2.46 2.46 0 0 0 .295 1.217q.075.13.157.263a3.1 3.1 0 0 1 .563 1.414l.408 4.312c.054.764.483 1.343.995 1.343h1.235c.511 0 .94-.58.994-1.343l.408-4.312a3.3 3.3 0 0 1 .477-1.32q.113-.209.214-.417A3.1 3.1 0 0 0 15 13.835" />
    </svg>
  );
};
export default adultSvg;

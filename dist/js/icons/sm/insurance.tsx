import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const insuranceSvg = (props: Props) => {
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
      <path d="M22.192 2.981a2.56 2.56 0 0 0-1.442-1.447 26.56 26.56 0 0 0-17.5 0 2.56 2.56 0 0 0-1.442 1.447A3.8 3.8 0 0 0 1.5 4.448v6.458a12.48 12.48 0 0 0 3.45 8.137 24.7 24.7 0 0 0 5.184 4.363 3.48 3.48 0 0 0 3.732 0 24.7 24.7 0 0 0 5.185-4.363 12.48 12.48 0 0 0 3.45-8.137V4.448a3.85 3.85 0 0 0-.309-1.467M19.5 10.906a9.52 9.52 0 0 1-2.703 6.157 21.8 21.8 0 0 1-4.539 3.81.5.5 0 0 1-.258.075V3.052a23.4 23.4 0 0 1 7.47 1.213.7.7 0 0 1 .03.183z" />
    </svg>
  );
};
export default insuranceSvg;

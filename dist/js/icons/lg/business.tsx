import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const businessSvg = (props: Props) => {
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
      <path d="M7.382 1.312A.7.7 0 0 0 7 1.98v2.534C7 5.5 8 6 9 6s2-.5 2-1.486V2a.73.73 0 0 0-.405-.689A4 4 0 0 0 9 1.001a4.1 4.1 0 0 0-1.618.311M13 8.302v5.921c0 .4-.582.778-1.13 1.017a1.26 1.26 0 0 0-.795 1.014l-.45 5.823a1 1 0 0 1-.998.923H8.443a1 1 0 0 1-.997-.923l-.45-5.823a1.2 1.2 0 0 0-.805-.99C5.621 15.05 5 14.704 5 14.302V8.38a.85.85 0 0 1 .547-.828 12.6 12.6 0 0 1 3.488-.55 12.6 12.6 0 0 1 3.417.477.84.84 0 0 1 .548.823m2.382 9.01a.7.7 0 0 0-.382.668v3.534C15 22.5 16 23 17 23s2-.5 2-1.486V18a.73.73 0 0 0-.405-.689 4 4 0 0 0-1.595-.31 4.1 4.1 0 0 0-1.618.311" />
    </svg>
  );
};
export default businessSvg;

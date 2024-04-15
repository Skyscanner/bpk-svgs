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
      width="1.5rem"
      height="1.5rem"
      fill={props.fill}
      {...props}
    >
      <path d="M10 1.98a.7.7 0 0 1 .382-.667A4.1 4.1 0 0 1 12 1a4 4 0 0 1 1.595.31A.73.73 0 0 1 14 2v2.514C14 5.5 13 6 12 6s-2-.5-2-1.486zm6 12.244V8.302a.84.84 0 0 0-.548-.823A12.6 12.6 0 0 0 12.035 7a12.7 12.7 0 0 0-3.488.55.85.85 0 0 0-.547.83v5.92c0 .402.62.749 1.191.964a1.2 1.2 0 0 1 .805.989l.45 5.823a1 1 0 0 0 .997.923h1.184a1 1 0 0 0 .997-.923l.45-5.823a1.27 1.27 0 0 1 .797-1.014C15.418 15 16 14.624 16 14.224" />
    </svg>
  );
};
export default adultSvg;

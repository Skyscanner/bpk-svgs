import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const baggageCabinSvg = (props: Props) => {
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
      <path d="M9 2.498V12H8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2v1a1 1 0 1 0 2 0v-1h4v1a1 1 0 1 0 2 0v-1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1V2.5A1.5 1.5 0 0 0 13.5 1h-3A1.5 1.5 0 0 0 9 2.498M10 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9h-4z" />
    </svg>
  );
};
export default baggageCabinSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const airlineMultipleSvg = (props: Props) => {
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
      <path d="M7.341 19.435A1 1 0 0 0 8.167 21h7.42a2 2 0 0 0 1.935-1.492l3.906-14.872C21.654 3.818 21.315 3 20.75 3h-1.357a1.66 1.66 0 0 0-1.358.818zm5.15-9.738a1.08 1.08 0 0 1-.237.639L4.952 21h-1.45a1 1 0 0 1-.805-1.595l7.298-9.86A1.21 1.21 0 0 1 10.973 9h.978c.308 0 .522.31.54.697" />
    </svg>
  );
};
export default airlineMultipleSvg;

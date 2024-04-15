import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const airportsSvg = (props: Props) => {
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
      <path d="m22.854 9.233-8.087-8.087a3.913 3.913 0 0 0-5.534 0L1.146 9.233a3.913 3.913 0 0 0 0 5.534l8.087 8.087a3.913 3.913 0 0 0 5.534 0l8.087-8.087a3.913 3.913 0 0 0 0-5.534M9 12.023a.45.45 0 0 1-.34.437l-3.113.778a.842.842 0 0 1-.71-1.491L8.28 9.165a.45.45 0 0 1 .72.36zm10.334.902a.84.84 0 0 1-.881.313L14.06 12.14a.45.45 0 0 0-.559.436v3.174l1.063.532a.79.79 0 0 1-.545 1.473L12 17.25l-2.018.505a.79.79 0 0 1-.545-1.473l1.063-.532v-9c0-1.5.672-2.25 1.5-2.25s1.5.75 1.5 2.25v1.31a1.5 1.5 0 0 0 .845 1.35l4.818 2.337a.84.84 0 0 1 .17 1.178z" />
    </svg>
  );
};
export default airportsSvg;

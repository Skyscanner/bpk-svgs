import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const carDoorSvg = (props: Props) => {
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
      <path d="M3 21a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 3 3h11.297a1.5 1.5 0 0 1 1.153.54l6.355 7.626a3 3 0 0 1 .695 1.92V19.5A1.5 1.5 0 0 1 21 21zM5.25 6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h11.899a.75.75 0 0 0 .576-1.23l-4-4.5a.75.75 0 0 0-.576-.27zm0 7.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" />
    </svg>
  );
};
export default carDoorSvg;

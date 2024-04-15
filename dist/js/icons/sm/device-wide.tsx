import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const deviceWideSvg = (props: Props) => {
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
      <path d="M4.5 2.25a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3zm-3 16.5a1.5 1.5 0 0 0 0 3h21a1.5 1.5 0 0 0 0-3z" />
    </svg>
  );
};
export default deviceWideSvg;

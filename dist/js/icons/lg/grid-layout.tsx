import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const gridLayoutSvg = (props: Props) => {
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
      <path d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm0 10a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm14-3a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3z" />
    </svg>
  );
};
export default gridLayoutSvg;
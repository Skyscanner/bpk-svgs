import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const musicSvg = (props: Props) => {
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
      <path d="M2 12a10 10 0 0 1 20 0v7a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3v-2a8 8 0 0 0-16 0v2h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3z" />
    </svg>
  );
};
export default musicSvg;

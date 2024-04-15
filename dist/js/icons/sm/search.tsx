import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const searchSvg = (props: Props) => {
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
      <path d="M10.5 4.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-9 6a9 9 0 1 1 16.336 5.215l4.225 4.224a1.5 1.5 0 0 1-2.122 2.122l-4.224-4.225A9 9 0 0 1 1.5 10.5" />
    </svg>
  );
};
export default searchSvg;

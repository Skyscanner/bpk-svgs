import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const printSvg = (props: Props) => {
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
      <path d="M7.5 1.5A1.5 1.5 0 0 1 9 0h6a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1-1.5-1.5M24 9v6a4.5 4.5 0 0 1-4.5 4.5H18V21a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1.5H4.5A4.5 4.5 0 0 1 0 15V9a4.5 4.5 0 0 1 4.5-4.5h15A4.5 4.5 0 0 1 24 9M6 9a1.5 1.5 0 1 0-1.5 1.5A1.5 1.5 0 0 0 6 9m9 4.5a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 13.5v6a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z" />
    </svg>
  );
};
export default printSvg;

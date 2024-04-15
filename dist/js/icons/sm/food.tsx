import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const foodSvg = (props: Props) => {
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
      <path d="M21 1.5a1.5 1.5 0 0 1 1.49 1.325L22.5 3v18a1.5 1.5 0 0 1-2.99.175L19.5 21v-7.5H18a1.5 1.5 0 0 1-1.49-1.325L16.5 12V9c0-3.314 2.25-7.5 4.5-7.5m-9 0a1.5 1.5 0 0 1 1.49 1.325L13.5 3v6a6 6 0 0 1-4.499 5.81L9 21a1.5 1.5 0 0 1-2.99.175L6 21v-6.189A6 6 0 0 1 1.508 9.31L1.5 9V3a1.5 1.5 0 0 1 2.99-.175L4.5 3v6A3 3 0 0 0 6 11.599V3a1.5 1.5 0 0 1 2.99-.175L9 3l.002 8.598a3 3 0 0 0 1.487-2.345L10.5 9V3A1.5 1.5 0 0 1 12 1.5" />
    </svg>
  );
};
export default foodSvg;

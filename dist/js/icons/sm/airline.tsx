import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const airlineSvg = (props: Props) => {
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
      <path d="M1.743 20.612a1.17 1.17 0 0 0 .884 1.888h13.475a2.27 2.27 0 0 0 2.186-1.78l4.18-17.777A1.158 1.158 0 0 0 21.375 1.5h-2.001a6.44 6.44 0 0 0-5.127 2.609z" />
    </svg>
  );
};
export default airlineSvg;

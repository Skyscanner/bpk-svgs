import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const chevronUpSvg = (props: Props) => {
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
      <path d="M4.887 15.905a1.496 1.496 0 0 1 0-2.008l6.397-5.948a1 1 0 0 1 1.358-.004l6.532 6.012a1.427 1.427 0 0 1-.138 1.948 1.57 1.57 0 0 1-1.997.103L11.96 11.37l-4.97 4.535a1.72 1.72 0 0 1-2.104 0z" />
    </svg>
  );
};
export default chevronUpSvg;

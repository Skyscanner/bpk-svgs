import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const plusSvg = (props: Props) => {
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
      <path d="M12 1.5A1.5 1.5 0 0 0 10.5 3v7.5H3a1.5 1.5 0 0 0 0 3h7.5V21a1.5 1.5 0 0 0 3 0v-7.5H21a1.5 1.5 0 0 0 0-3h-7.5V3A1.5 1.5 0 0 0 12 1.5" />
    </svg>
  );
};
export default plusSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const longArrowDownSvg = (props: Props) => {
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
      <path d="M19.713 11.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.39-1.438l.024.024 5.293 5.293V5a1 1 0 0 1 2 0v11.586l5.293-5.293a1 1 0 0 1 1.414 0" />
    </svg>
  );
};
export default longArrowDownSvg;
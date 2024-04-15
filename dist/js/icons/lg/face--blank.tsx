import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const faceBlankSvg = (props: Props) => {
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
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m-4.561 8.561a1.5 1.5 0 1 1 .486.325 1.5 1.5 0 0 1-.486-.325M15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m.5-6.001a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5" />
    </svg>
  );
};
export default faceBlankSvg;

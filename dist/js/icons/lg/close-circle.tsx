import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const closeCircleSvg = (props: Props) => {
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
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m3.707 12.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 1.414-1.414L12 10.586l2.293-2.293a1 1 0 0 1 1.439 1.39l-.025.024L13.414 12z" />
    </svg>
  );
};
export default closeCircleSvg;

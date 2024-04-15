import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const pictureSvg = (props: Props) => {
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
      <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m1 12-5.72-2.697a3 3 0 0 0-2.56 0L5 15V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-8.5-6.5a2 2 0 1 1-2-2 2 2 0 0 1 2 2" />
    </svg>
  );
};
export default pictureSvg;

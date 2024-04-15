import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const originSvg = (props: Props) => {
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
      <path d="M12 17.25a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
    </svg>
  );
};
export default originSvg;

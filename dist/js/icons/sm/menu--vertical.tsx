import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const menuVerticalSvg = (props: Props) => {
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
      <path d="M12 6a3 3 0 1 1 3-3 3 3 0 0 1-3 3m0 9a3 3 0 1 1 3-3 3 3 0 0 1-3 3m-3 6a3 3 0 1 0 3-3 3 3 0 0 0-3 3" />
    </svg>
  );
};
export default menuVerticalSvg;

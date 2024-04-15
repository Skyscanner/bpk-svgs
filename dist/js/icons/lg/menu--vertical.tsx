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
      width="1.5rem"
      height="1.5rem"
      fill={props.fill}
      {...props}
    >
      <path d="M12 7a2 2 0 1 0-2-2 2 2 0 0 0 2 2m0 7a2 2 0 1 0-2-2 2 2 0 0 0 2 2m2 5a2 2 0 1 1-2-2 2 2 0 0 1 2 2" />
    </svg>
  );
};
export default menuVerticalSvg;

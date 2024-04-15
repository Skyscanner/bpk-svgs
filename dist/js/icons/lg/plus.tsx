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
      width="1.5rem"
      height="1.5rem"
      fill={props.fill}
      {...props}
    >
      <path d="M12 3a1 1 0 0 0-1 1v7H4a1 1 0 0 0 0 2h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V4a1 1 0 0 0-1-1" />
    </svg>
  );
};
export default plusSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const mobileSvg = (props: Props) => {
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
      <path d="M16.125 0h-8.25A3.375 3.375 0 0 0 4.5 3.375v17.25A3.375 3.375 0 0 0 7.875 24h8.25a3.375 3.375 0 0 0 3.375-3.375V3.375A3.375 3.375 0 0 0 16.125 0m-3.75 21.75h-.75a1.125 1.125 0 0 1 0-2.25h.75a1.125 1.125 0 0 1 0 2.25" />
    </svg>
  );
};
export default mobileSvg;

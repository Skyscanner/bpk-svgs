import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const alertExpiredSvg = (props: Props) => {
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
      <path d="M20.056 14.61A10 10 0 0 1 19 10.14V9.5a7 7 0 0 0-14 0v.64a10 10 0 0 1-1.056 4.47l-.497.996a2 2 0 0 0 1.79 2.894h13.527a2 2 0 0 0 1.79-2.894zm-5.349-1.428a1 1 0 0 1-1.414.025L12 11.914l-1.293 1.293-.024.024a1 1 0 0 1-1.39-1.438l1.293-1.293-1.293-1.293a1 1 0 0 1 1.414-1.414L12 9.086l1.293-1.293a1 1 0 0 1 1.414 1.414L13.414 10.5l1.293 1.293a1 1 0 0 1 0 1.39zm.212 7.277a2.14 2.14 0 0 1-1.86 1.041h-2.118a2.14 2.14 0 0 1-1.86-1.041c-.28-.485.215-.959.8-.959h4.238c.585 0 1.081.474.8.959" />
    </svg>
  );
};
export default alertExpiredSvg;

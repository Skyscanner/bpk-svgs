import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const walletSvg = (props: Props) => {
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
      <path d="M18 19.5h3a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-15a3 3 0 0 1 3-3h13.5a1.5 1.5 0 0 1 0 3H3.75a.75.75 0 0 0 0 1.5H18a3 3 0 0 1 3 3h-3a4.5 4.5 0 0 0-4.5 4.5V15a4.5 4.5 0 0 0 4.5 4.5m6-6V15a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-1.5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3m-1.5.75a.75.75 0 1 0-.75.75.75.75 0 0 0 .75-.75" />
    </svg>
  );
};
export default walletSvg;

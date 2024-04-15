import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const upgradeSvg = (props: Props) => {
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
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1m3.707-4.879a1 1 0 0 1-1.414 0L13 10.828V13a1 1 0 0 1-2 0v-2.172l-1.293 1.293-.025.025a1 1 0 1 1-1.389-1.439L12 7l3.707 3.707a1 1 0 0 1 0 1.414" />
    </svg>
  );
};
export default upgradeSvg;

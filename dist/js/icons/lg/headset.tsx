import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const headsetSvg = (props: Props) => {
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
      <path d="M12 1a9 9 0 0 0-9 9v5a3 3 0 0 0 3 3h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H5v-2a7 7 0 0 1 14 0v2h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3a3 3 0 0 1-3 3h-3a1 1 0 0 0 0 2h3a5 5 0 0 0 5-5v-8a9 9 0 0 0-9-9" />
    </svg>
  );
};
export default headsetSvg;

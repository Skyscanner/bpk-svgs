import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const centerLocationSvg = (props: Props) => {
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
      <path d="M6 4a2 2 0 0 0-2 2v2a1 1 0 0 1-2 0V6a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2zm9-1a1 1 0 0 1 1-1h2a4 4 0 0 1 4 4v2a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2h-2a1 1 0 0 1-1-1M4 16v2a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-2a1 1 0 1 1 2 0m17-1a1 1 0 0 1 1 1v2a4 4 0 0 1-4 4h-2a1 1 0 1 1 0-2h2a2 2 0 0 0 2-2v-2a1 1 0 0 1 1-1m-7.63-1.24a.545.545 0 0 0-.37.502V17a1 1 0 1 1-2 0v-2.738a.545.545 0 0 0-.37-.503A4.002 4.002 0 0 1 12 6a4 4 0 0 1 1.37 7.76" />
    </svg>
  );
};
export default centerLocationSvg;

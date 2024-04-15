import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const hotelsSmokingSvg = (props: Props) => {
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
      <path d="M3 5.25v-1.5a1.5 1.5 0 0 1 3 0v1.5a3 3 0 0 0 3 3h.803a6 6 0 0 1-.803-3v-1.5a1.5 1.5 0 0 1 3 0v1.5a3 3 0 0 0 3 3h1.5a4.5 4.5 0 0 1 4.5 4.5 1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 0-1.5-1.5H9a6 6 0 0 1-6-6m19.5 13.5a3 3 0 0 1-3 3h-15a3 3 0 0 1 0-6h15a3 3 0 0 1 3 3m-1.5 0a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 0 1.5-1.5" />
    </svg>
  );
};
export default hotelsSmokingSvg;

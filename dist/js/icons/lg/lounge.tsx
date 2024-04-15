import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const loungeSvg = (props: Props) => {
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
      <path d="M3 7.5a1.14 1.14 0 0 1 .684-1.07l1.991-.758a17.66 17.66 0 0 1 12.65 0l1.991.758A1.14 1.14 0 0 1 21 7.5v2.54a.533.533 0 0 1-.608.515 7.3 7.3 0 0 0-3.738.525l-.775.325A1.49 1.49 0 0 0 15 12.79V13a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 9 13v-.21a1.49 1.49 0 0 0-.88-1.385l-.774-.325a7.3 7.3 0 0 0-3.738-.524A.534.534 0 0 1 3 10.04z" />
      <path d="M1.266 12.327A.49.49 0 0 0 1 12.79v3.71a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-3.71a.49.49 0 0 0-.266-.463l-.775-.325a6.27 6.27 0 0 0-4.918 0l-.775.325a.49.49 0 0 0-.266.464v.709a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.71a.49.49 0 0 0-.266-.463l-.774-.325a6.27 6.27 0 0 0-4.92 0z" />
    </svg>
  );
};
export default loungeSvg;

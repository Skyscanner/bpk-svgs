import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const flaskSvg = (props: Props) => {
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
      <path d="m19.673 17.694-5.084-9.736a3.75 3.75 0 0 1-.43-1.741V3a1.043 1.043 0 0 0-1.08-1H10.92a1.043 1.043 0 0 0-1.08 1v3.221a3.76 3.76 0 0 1-.43 1.741l-5.083 9.732A3.018 3.018 0 0 0 7.243 22h9.514a3.02 3.02 0 0 0 2.916-4.306m-3.74-.759a1 1 0 0 1-1.327-.488l-2-4q-.015-.027-.028-.055a1 1 0 1 1 1.816-.839l2 4q.015.027.028.055a1 1 0 0 1-.489 1.327" />
    </svg>
  );
};
export default flaskSvg;

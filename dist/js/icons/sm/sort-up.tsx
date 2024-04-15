import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const sortUpSvg = (props: Props) => {
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
      <path d="M2.26 6h6a1.417 1.417 0 0 0 1.5-1.5A1.417 1.417 0 0 0 8.26 3h-6a1.417 1.417 0 0 0-1.5 1.5A1.417 1.417 0 0 0 2.26 6m4.75 4.5c.75 0 1.25.6 1.25 1.5s-.5 1.5-1.25 1.5h-5c-.75 0-1.25-.6-1.25-1.5s.5-1.5 1.25-1.5zm-.25 9A1.502 1.502 0 0 0 5.091 18H2.426a1.508 1.508 0 1 0 0 3h2.666a1.502 1.502 0 0 0 1.667-1.5zM11.7 7.94a1.5 1.5 0 0 0 2.12 2.12l1.94-1.939V19.5a1.5 1.5 0 0 0 3 0V8.121l1.94 1.94a1.5 1.5 0 0 0 2.12-2.122l-4.5-4.5a1.5 1.5 0 0 0-2.12 0l-4.5 4.5z" />
    </svg>
  );
};
export default sortUpSvg;

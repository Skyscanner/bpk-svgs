import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const endCallSvg = (props: Props) => {
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
      <path d="M8.277 12.547a.97.97 0 0 1 .63-.446 15.1 15.1 0 0 1 6.186 0 .97.97 0 0 1 .63.447l1.87 3.037a1.74 1.74 0 0 0 1.442.915h2.996a2.12 2.12 0 0 0 1.838-2.028l.124-1.43a1.9 1.9 0 0 0-.755-1.707A18.94 18.94 0 0 0 11.998 7.5 18.94 18.94 0 0 0 .763 11.334a1.9 1.9 0 0 0-.754 1.709l.125 1.43A2.12 2.12 0 0 0 1.969 16.5h2.996a1.73 1.73 0 0 0 1.44-.915z" />
    </svg>
  );
};
export default endCallSvg;

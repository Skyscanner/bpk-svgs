import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const legroomNormalSvg = (props: Props) => {
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
      <path d="M8 3a1 1 0 0 0-1 1v8c0 2 1 4 3.5 4H12c1.5 0 2 .5 2 2v1.5a1.326 1.326 0 0 0 1.5 1.5h3.665c.552 0 1.02-.473.762-.961A1.98 1.98 0 0 0 18 19a.917.917 0 0 1-1-1v-2a3.04 3.04 0 0 0-2-3l-2.833-.677a1 1 0 0 1-.724-.855l-.697-6.454A2.28 2.28 0 0 0 8.628 3z" />
      <path d="M6 6a1 1 0 0 0-2 0v5.636a8.87 8.87 0 0 0 1.25 5.122C6.283 18.227 7.967 19 10.332 19H12a1 1 0 0 0 0-2h-1.667c-1.9 0-2.884-.592-3.449-1.394A6.97 6.97 0 0 1 6 11.636z" />
    </svg>
  );
};
export default legroomNormalSvg;

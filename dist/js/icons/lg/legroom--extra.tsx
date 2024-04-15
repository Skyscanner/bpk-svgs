import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const legroomExtraSvg = (props: Props) => {
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
      <path d="M7.5 3a1 1 0 0 0-1 1v8c0 2 1 4 3.5 4h2.5a2.09 2.09 0 0 1 2 1l1.35 3.506a.89.89 0 0 0 .768.494h3.047c.552 0 1.02-.473.762-.961a1.99 1.99 0 0 0-1.754-1.064.4.4 0 0 1-.356-.216L16 14.306a2.22 2.22 0 0 0-1.344-1.145l-2.989-.838a1 1 0 0 1-.724-.855l-.697-6.454A2.28 2.28 0 0 0 8.128 3z" />
      <path d="M5.5 6a1 1 0 0 0-2 0v5.636a8.87 8.87 0 0 0 1.25 5.122C5.783 18.227 7.467 19 9.832 19H12.5a1 1 0 0 0 0-2H9.833c-1.9 0-2.884-.592-3.449-1.394a6.97 6.97 0 0 1-.884-3.97z" />
    </svg>
  );
};
export default legroomExtraSvg;

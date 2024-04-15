import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const muteSvg = (props: Props) => {
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
      <path d="M7.713 13.415a.48.48 0 0 0 .098-.517A4.5 4.5 0 0 1 7.5 11.25V3C7.5 1.758 9.514.75 12 .75c2.484 0 4.5 1.008 4.5 2.25v.542a.45.45 0 0 0 .768.318l2.671-2.67a1.5 1.5 0 0 1 2.122 2.12l-18 18a1.5 1.5 0 0 1-2.122-2.12l2.456-2.456a.466.466 0 0 0 .055-.584A8.96 8.96 0 0 1 3 11.25a1.5 1.5 0 0 1 3 0 6 6 0 0 0 .56 2.535.42.42 0 0 0 .681.103zm2.787 7.091a.466.466 0 0 0-.374-.451 9 9 0 0 1-.961-.26.288.288 0 0 1-.107-.481l2.014-2.015a.3.3 0 0 1 .253-.087A6 6 0 0 0 18 11.25a1.5 1.5 0 0 1 3 0 9.004 9.004 0 0 1-7.126 8.805.466.466 0 0 0-.374.451v1.244a1.5 1.5 0 0 1-3 0z" />
    </svg>
  );
};
export default muteSvg;

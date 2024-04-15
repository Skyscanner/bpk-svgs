import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const baggageCabinAddSvg = (props: Props) => {
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
      <path d="M7.5 0h3a2.25 2.25 0 0 1 2.25 2.25V12h.75q.116 0 .228.011c.332.034.315.441.01.578a6.75 6.75 0 0 0-3.211 9.308c.14.265-.043.603-.343.603H6.75v.375a1.125 1.125 0 0 1-2.25 0V22.5a2.25 2.25 0 0 1-2.25-2.25v-6A2.25 2.25 0 0 1 4.5 12h.75V2.248A2.25 2.25 0 0 1 7.5 0m3.75 2.625a.375.375 0 0 0-.375-.375h-3.75a.375.375 0 0 0-.375.375V12h4.5zm10.5 16.125a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0m-6-3V18H13.5a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0V19.5h2.25a.75.75 0 0 0 0-1.5h-2.25v-2.25a.75.75 0 0 0-1.5 0" />
    </svg>
  );
};
export default baggageCabinAddSvg;

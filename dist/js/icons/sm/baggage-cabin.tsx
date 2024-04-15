import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const baggageCabinSvg = (props: Props) => {
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
      <path d="M10.5 0h3a2.25 2.25 0 0 1 2.25 2.25V12h.75a2.25 2.25 0 0 1 2.25 2.25v6a2.25 2.25 0 0 1-2.25 2.25v.375a1.125 1.125 0 0 1-2.25 0V22.5h-4.5v.375a1.125 1.125 0 0 1-2.25 0V22.5a2.25 2.25 0 0 1-2.25-2.25v-6A2.25 2.25 0 0 1 7.5 12h.75V2.248A2.25 2.25 0 0 1 10.5 0m3.75 2.625a.375.375 0 0 0-.375-.375h-3.75a.375.375 0 0 0-.375.375V12h4.5z" />
    </svg>
  );
};
export default baggageCabinSvg;

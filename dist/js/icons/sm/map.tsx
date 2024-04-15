import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const mapSvg = (props: Props) => {
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
      <path d="M21 2.216a1.5 1.5 0 0 0-.557.107L16.25 4a3 3 0 0 1-2.456-.102l-3.59-1.796A3 3 0 0 0 7.748 2L2.442 4.123A1.5 1.5 0 0 0 1.5 5.516v14.769a1.5 1.5 0 0 0 2.057 1.392L7.75 20a3 3 0 0 1 2.456.102l3.59 1.796a3 3 0 0 0 2.457.102l5.306-2.123a1.5 1.5 0 0 0 .943-1.392V3.715A1.5 1.5 0 0 0 21 2.215zm-6 16.07a.75.75 0 0 1-1.085.67l-4.5-2.25a.75.75 0 0 1-.415-.67V5.713a.75.75 0 0 1 1.085-.67v-.001l4.5 2.25a.75.75 0 0 1 .415.67z" />
    </svg>
  );
};
export default mapSvg;

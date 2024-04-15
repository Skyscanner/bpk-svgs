import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const hotelsSmokingSvg = (props: Props) => {
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
      <path d="M8 6.452V4.08a.64.64 0 0 1 .685-.58.552.552 0 0 1 .588.58v2.372c0 1.295 1.307 2.19 2.838 2.19h1.82a3.3 3.3 0 0 1-.84-2.2V4.079a.617.617 0 0 1 .65-.578.59.59 0 0 1 .623.578v2.365a2.33 2.33 0 0 0 2.561 2.2h1.542A3.47 3.47 0 0 1 22 11.924a.655.655 0 0 1-1.3-.001 2.123 2.123 0 0 0-2.233-1.985h-1.542a4 4 0 0 1-.516-.03.8.8 0 0 1-.185.022v-.001H12.11C9.825 9.929 8 8.385 8 6.452M22 16.5v2a2.15 2.15 0 0 1-2 2H5a3 3 0 0 1 0-6h15a2.15 2.15 0 0 1 2 2m-2 1a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1" />
    </svg>
  );
};
export default hotelsSmokingSvg;
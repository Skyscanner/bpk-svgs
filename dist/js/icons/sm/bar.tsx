import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const barSvg = (props: Props) => {
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
      <path d="M3.13 3.407a.75.75 0 0 1 .678-1.157h16.384a.75.75 0 0 1 .677 1.157l-6.6 9.169a4.24 4.24 0 0 0-.019 4.86l3.411 3.161a.75.75 0 0 1-.68 1.153H7.02a.75.75 0 0 1-.68-1.153l3.411-3.16a4.24 4.24 0 0 0-.02-4.861zM14.25 8.25a2.25 2.25 0 0 0 0-4.5 2.25 2.25 0 1 0 0 4.5" />
    </svg>
  );
};
export default barSvg;

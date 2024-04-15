import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const weatherWindSvg = (props: Props) => {
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
      <path d="M10.5 4A2.5 2.5 0 0 0 8 6.5a1 1 0 0 1-2 0 4.5 4.5 0 1 1 4.5 4.5H3a1 1 0 0 1 0-2h7.5a2.5 2.5 0 0 0 0-5m7.875 8a1.63 1.63 0 0 0-1.498.917 1 1 0 1 1-1.84-.785l.023-.049A3.63 3.63 0 0 1 18.375 10a3.502 3.502 0 1 1 0 7h-1.222a3.4 3.4 0 0 1 .347 1.5 3.565 3.565 0 0 1-3.625 3.5 3.63 3.63 0 0 1-3.316-2.083 1 1 0 0 1 1.818-.834 1.63 1.63 0 0 0 1.498.917 1.505 1.505 0 1 0 0-3H3a1 1 0 0 1 0-2h15.375a1.505 1.505 0 1 0 0-3" />
    </svg>
  );
};
export default weatherWindSvg;

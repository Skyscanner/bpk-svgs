import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const petrolSvg = (props: Props) => {
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
      <path d="M7.5 1.5c-3 0-4.925.895-5.756 2.026a1.5 1.5 0 0 0-.244.88V20.09a2.195 2.195 0 0 0 1.875 2.41h8.25a2.193 2.193 0 0 0 1.875-2.41V4.5a1.62 1.62 0 0 0-.313-1.014C12.262 2.358 10.5 1.5 7.5 1.5m3 8.25a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 5.25 6h4.5a.75.75 0 0 1 .75.75zm12 1.354v4.646a3.75 3.75 0 0 1-7.5 0v-3a1.5 1.5 0 0 1 3 0v3a.75.75 0 0 0 1.5 0v-4.647a1.5 1.5 0 0 0-.55-1.16l-3.4-2.783a1.5 1.5 0 0 1 1.9-2.32v-.001l3.4 2.782a4.5 4.5 0 0 1 1.65 3.483" />
    </svg>
  );
};
export default petrolSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const shareAndroidSvg = (props: Props) => {
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
      <path d="M17.248 3.002a2.998 2.998 0 1 1-1.542 5.57 1.27 1.27 0 0 0-1.278-.096l-4.113 2.351a1.28 1.28 0 0 0-.567 1.15v.047a1.27 1.27 0 0 0 .567 1.15l4.114 2.35a1.27 1.27 0 0 0 1.277-.096A2.998 2.998 0 1 1 14.25 18v-.024a1.27 1.27 0 0 0-.567-1.149l-4.113-2.35a1.27 1.27 0 0 0-1.277.094 2.998 2.998 0 1 1 0-5.143 1.27 1.27 0 0 0 1.276.096l4.114-2.35a1.28 1.28 0 0 0 .567-1.15V6a3 3 0 0 1 2.998-2.998" />
    </svg>
  );
};
export default shareAndroidSvg;

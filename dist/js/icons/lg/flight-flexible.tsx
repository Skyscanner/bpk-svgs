import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const flightFlexibleSvg = (props: Props) => {
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
      <path d="M1 7a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2.5a.615.615 0 0 1-.495.562 2 2 0 0 0 0 3.876.615.615 0 0 1 .495.562V17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2.5a.615.615 0 0 1 .495-.562 2 2 0 0 0 0-3.876A.615.615 0 0 1 1 9.5zm7 1a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2h-.362a3 3 0 0 1 4.206-.263 1 1 0 0 0 1.313-1.508A5 5 0 0 0 8 8.839zm8 7a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0 0 2h.703a3 3 0 0 1-4.813 1.25 1 1 0 0 0-1.324 1.5A5.002 5.002 0 0 0 16 14.825z" />
    </svg>
  );
};
export default flightFlexibleSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const taxiSvg = (props: Props) => {
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
      <path d="M4.5 3.75A.75.75 0 0 1 5.25 3h6a.75.75 0 0 1 .75.75v.404a.347.347 0 0 0 .346.346 3.87 3.87 0 0 1 3.256 1.822l2.37 3.716a1 1 0 0 0 .843.462h.685A4.5 4.5 0 0 1 24 15v3a1.5 1.5 0 0 1-1.5 1.5h-.75a.925.925 0 0 1-.843-.742 3.001 3.001 0 0 0-5.814 0 .925.925 0 0 1-.843.742h-4.5a.925.925 0 0 1-.843-.742 3.001 3.001 0 0 0-5.814 0 .925.925 0 0 1-.843.742H1.5A1.5 1.5 0 0 1 0 18v-6a1.5 1.5 0 0 1 1.5-1.5h14.023a.5.5 0 0 0 .424-.764L14.3 7.093A2.32 2.32 0 0 0 12.346 6H2.283a.75.75 0 1 1 0-1.5H4.05a.45.45 0 0 0 .45-.45z" />
      <path d="M6 21a1.5 1.5 0 1 0-1.5-1.5A1.5 1.5 0 0 0 6 21m13.5-1.5A1.5 1.5 0 1 1 18 18a1.5 1.5 0 0 1 1.5 1.5" />
    </svg>
  );
};
export default taxiSvg;

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
      width="1rem"
      height="1rem"
      fill={props.fill}
      {...props}
    >
      <path d="M12 8.25zm9.096 4.495a3 3 0 0 0 2.162 2.162.925.925 0 0 1 .742.843V18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2.25a.925.925 0 0 1 .742-.843 3 3 0 0 0 2.162-3.652A3 3 0 0 0 .742 9.093.925.925 0 0 1 0 8.25V6a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v2.25a.925.925 0 0 1-.742.843 3 3 0 0 0-2.162 3.652M6.75 12h3a.75.75 0 0 0 0-1.5H8.562a3.752 3.752 0 0 1 6.687-.374.75.75 0 1 0 1.298-.752A5.25 5.25 0 0 0 7.5 9.295V8.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 .75.75m11.25.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h1.188a3.751 3.751 0 0 1-6.687.374.75.75 0 0 0-1.298.752 5.25 5.25 0 0 0 9.047.079v1.045a.75.75 0 0 0 1.5 0z" />
    </svg>
  );
};
export default flightFlexibleSvg;

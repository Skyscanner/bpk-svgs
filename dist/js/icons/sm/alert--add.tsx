import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const alertAddSvg = (props: Props) => {
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
      <path d="M5.056 18h13.888a2.062 2.062 0 0 0 1.836-2.985l-.51-1.025a10.36 10.36 0 0 1-1.084-4.612v-.659a7.186 7.186 0 1 0-14.372 0v.659A10.35 10.35 0 0 1 3.73 13.99l-.51 1.025A2.062 2.062 0 0 0 5.056 18M9 7.5h1.5V6a1.5 1.5 0 0 1 3 0v1.5H15a1.5 1.5 0 1 1 0 3h-1.5V12a1.5 1.5 0 0 1-3 0v-1.5H9a1.5 1.5 0 0 1 0-3m5.168 12a1.02 1.02 0 0 1 .755 1.439 2.26 2.26 0 0 1-1.93 1.561h-2a2.24 2.24 0 0 1-1.917-1.561 1.02 1.02 0 0 1 .755-1.439z" />
    </svg>
  );
};
export default alertAddSvg;

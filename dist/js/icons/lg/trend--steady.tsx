import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const trendSteadySvg = (props: Props) => {
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
      <path d="M14.293 17.713a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.438 1.39l.024.024 3.293 3.293H4a1 1 0 0 0 0 2h13.586L14.293 16.3a1 1 0 0 0 0 1.414z" />
    </svg>
  );
};
export default trendSteadySvg;

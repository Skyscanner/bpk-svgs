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
      width="1rem"
      height="1rem"
      fill={props.fill}
      {...props}
    >
      <path
        d="M3 12a1.5 1.5 0 0 0 1.5 1.5h11.379l-3.44 3.44a1.5 1.5 0 0 0 2.122 2.12l6-6a1.5 1.5 0 0 0 0-2.12l-6-6a1.5 1.5 0 0 0-2.122 2.12l3.44 3.44H4.5A1.5 1.5 0 0 0 3 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default trendSteadySvg;

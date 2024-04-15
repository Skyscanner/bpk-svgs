import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const policySvg = (props: Props) => {
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
      <path d="M18 1.5h-7.94a2.8 2.8 0 0 0-1.992.825L3.826 6.567A2.82 2.82 0 0 0 3 8.56V19.5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4.65a3.31 3.31 0 0 0-3-3.15M6.137 6.707 9.72 3.135v-.001a.458.458 0 0 1 .78.33v3.573a.46.46 0 0 1-.458.462H6.459a.464.464 0 0 1-.322-.792M15 13.982c0 1.947-1.852 3.384-2.646 3.91a.64.64 0 0 1-.708 0C10.852 17.366 9 15.929 9 13.981v-2.598a.425.425 0 0 1 .28-.397 7.86 7.86 0 0 1 5.44 0 .425.425 0 0 1 .28.398z" />
    </svg>
  );
};
export default policySvg;

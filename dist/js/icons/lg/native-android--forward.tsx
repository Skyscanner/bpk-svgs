import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const nativeAndroidForwardSvg = (props: Props) => {
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
      <path d="M11.293 19.713a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.438 1.39l.024.024 5.293 5.293H5a1 1 0 0 0 0 2h11.586L11.293 18.3a1 1 0 0 0 0 1.414z" />
    </svg>
  );
};
export default nativeAndroidForwardSvg;

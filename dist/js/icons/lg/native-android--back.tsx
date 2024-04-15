import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const nativeAndroidBackSvg = (props: Props) => {
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
      <path d="M12.707 19.713a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.438 1.39l-.024.024-5.293 5.293H19a1 1 0 0 1 0 2H7.414l5.293 5.293a1 1 0 0 1 0 1.414" />
    </svg>
  );
};
export default nativeAndroidBackSvg;
import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const viewSvg = (props: Props) => {
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
      <path d="M22.4 10.194a13.01 13.01 0 0 0-20.8 0 3.025 3.025 0 0 0 0 3.615 13.014 13.014 0 0 0 20.8 0 3.02 3.02 0 0 0 0-3.615M12 17a5.07 5.07 0 0 1-5-5 5.07 5.07 0 0 1 5-5 5.07 5.07 0 0 1 5 5 5.07 5.07 0 0 1-5 5m2-5a2 2 0 1 1-2-2 2.03 2.03 0 0 1 2 2" />
    </svg>
  );
};
export default viewSvg;

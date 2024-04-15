import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const exclamationSvg = (props: Props) => {
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
      <path d="m20.61 16.235-6.098-11.64a2.775 2.775 0 0 0-5.024 0L3.39 16.235C2.28 18.355 3.674 21 5.902 21h12.196c2.228 0 3.622-2.645 2.512-4.765M12 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1m1-4a1 1 0 1 1-2 0V9a1 1 0 0 1 2 0z" />
    </svg>
  );
};
export default exclamationSvg;

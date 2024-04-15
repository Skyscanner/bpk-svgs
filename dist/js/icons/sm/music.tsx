import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const musicSvg = (props: Props) => {
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
      <path d="M12 4.5A7.5 7.5 0 0 0 4.5 12v1.5h3A1.5 1.5 0 0 1 9 15v6a1.5 1.5 0 0 1-1.5 1.5h-3a3 3 0 0 1-3-3V12a10.5 10.5 0 0 1 21 0v7.5a3 3 0 0 1-3 3h-3A1.5 1.5 0 0 1 15 21v-6a1.5 1.5 0 0 1 1.5-1.5h3V12A7.5 7.5 0 0 0 12 4.5" />
    </svg>
  );
};
export default musicSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const sortSvg = (props: Props) => {
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
      <path d="m21.709 16.707-3.996 4a1 1 0 0 1-1.32.084l-.094-.083-4.006-4a1 1 0 0 1 1.32-1.499l.094.083 2.292 2.291V7.999a1 1 0 0 1 .884-.993L17 7a1 1 0 0 1 .993.884L18 8v9.591l2.294-2.297a1 1 0 0 1 1.32-.084l.094.084a1 1 0 0 1 .084 1.32l-.084.094zm-14.592.283L7 16.997a1 1 0 0 1-.993-.884L6 15.997V6.413L3.707 8.707a1 1 0 0 1-1.32.084l-.095-.084a1 1 0 0 1-.083-1.32l.083-.094 3.997-4a1 1 0 0 1 1.32-.084l.094.084 4.003 4a1 1 0 0 1-1.32 1.498l-.093-.084L8 6.417v9.58a1 1 0 0 1-.883.993" />
    </svg>
  );
};
export default sortSvg;

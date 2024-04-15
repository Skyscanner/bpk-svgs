import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const pictureSvg = (props: Props) => {
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
      <path d="M19.5 1.5h-15a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-15a3 3 0 0 0-3-3m0 11.32a1.5 1.5 0 0 1-2.14 1.357l-3.867-1.823a3.5 3.5 0 0 0-2.985 0L6.64 14.177A1.5 1.5 0 0 1 4.5 12.82V6A1.5 1.5 0 0 1 6 4.5h12A1.5 1.5 0 0 1 19.5 6zM9 7.5A1.5 1.5 0 1 1 7.5 6 1.5 1.5 0 0 1 9 7.5" />
    </svg>
  );
};
export default pictureSvg;

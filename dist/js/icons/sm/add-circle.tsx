import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const addCircleSvg = (props: Props) => {
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
      <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5m4.5 12h-3v3a1.5 1.5 0 0 1-3 0v-3h-3a1.5 1.5 0 0 1 0-3h3v-3a1.5 1.5 0 0 1 3 0v3h3a1.5 1.5 0 0 1 0 3" />
    </svg>
  );
};
export default addCircleSvg;

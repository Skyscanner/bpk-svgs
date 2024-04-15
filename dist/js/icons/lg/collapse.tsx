import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const collapseSvg = (props: Props) => {
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
      <path d="M4.707 3.293a1 1 0 0 0-1.414 1.414L6.586 8H4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V4a1 1 0 0 0-2 0v2.586zm-1.414 16a1 1 0 0 0 1.39 1.439l.024-.025L8 17.414V20a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h2.586zm17.414 0L17.414 16H20a1 1 0 0 0 0-2h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-2.586l3.293 3.293a1 1 0 0 0 1.414-1.414m-1.414-16a1 1 0 1 1 1.439 1.39l-.025.024L17.414 8H20a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v2.586z" />
    </svg>
  );
};
export default collapseSvg;

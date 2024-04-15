import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const mediaSvg = (props: Props) => {
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
      <path d="M19.5 2.25h-15a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3m-4.694 7.864-3.724 2.578a.389.389 0 0 1-.582-.37V7.178a.39.39 0 0 1 .582-.37l3.724 2.566a.45.45 0 0 1 0 .74M19.5 20.25a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5" />
    </svg>
  );
};
export default mediaSvg;

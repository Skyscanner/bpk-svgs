import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const gearsManualCircleSvg = (props: Props) => {
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
      <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5M16.5 12a1.5 1.5 0 0 1-1.5 1.5h-4.5v3a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 3 0v3h3v-3a1.5 1.5 0 0 1 3 0z" />
    </svg>
  );
};
export default gearsManualCircleSvg;

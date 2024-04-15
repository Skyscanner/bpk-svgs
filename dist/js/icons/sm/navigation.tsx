import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const navigationSvg = (props: Props) => {
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
      <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.53 10.53 0 0 0 12 1.5m4.475 6.63-1.785 5.352a1.91 1.91 0 0 1-1.208 1.209L8.13 16.474a.478.478 0 0 1-.605-.605l1.784-5.352a1.91 1.91 0 0 1 1.209-1.208v.001l5.352-1.785a.478.478 0 0 1 .605.605M13.5 12a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5" />
    </svg>
  );
};
export default navigationSvg;

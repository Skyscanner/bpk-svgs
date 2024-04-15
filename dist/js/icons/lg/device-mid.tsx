import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const deviceMidSvg = (props: Props) => {
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
      <path d="M19.75 3.999H4.25A2.25 2.25 0 0 0 2 6.249v11.502a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25V6.249a2.25 2.25 0 0 0-2.25-2.25m-6 13h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5" />
    </svg>
  );
};
export default deviceMidSvg;

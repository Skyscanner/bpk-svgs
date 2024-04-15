import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const longArrowUpSvg = (props: Props) => {
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
      <path
        d="M12 21a1.5 1.5 0 0 1-1.5-1.5V8.121l-4.94 4.94a1.5 1.5 0 0 1-2.12-2.122l7.5-7.5a1.5 1.5 0 0 1 2.12 0l7.5 7.5a1.5 1.5 0 0 1-2.12 2.122L13.5 8.12V19.5A1.5 1.5 0 0 1 12 21"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default longArrowUpSvg;

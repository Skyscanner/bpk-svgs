import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const cameraSvg = (props: Props) => {
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
      <path d="M19.5 5.25h-.801a3.2 3.2 0 0 1-2.698-1.088l-.404-.574A3.12 3.12 0 0 0 13.05 2.25h-2.29a3.12 3.12 0 0 0-2.548 1.338l-.718 1.02a1.62 1.62 0 0 1-1.549.642H4.5a3.273 3.273 0 0 0-3 3.25v10.25a3.25 3.25 0 0 0 3.15 3h14.7a3.25 3.25 0 0 0 3.15-3V8.5a3.273 3.273 0 0 0-3-3.25M12 18.75a6 6 0 1 1 6-6 6 6 0 0 1-6 6m3-6a3 3 0 1 1-3-3 3 3 0 0 1 3 3" />
    </svg>
  );
};
export default cameraSvg;

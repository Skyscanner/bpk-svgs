import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const calendarSvg = (props: Props) => {
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
      <path d="M20 8.5H4a1 1 0 0 0-1 1v8.25A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V9.5a1 1 0 0 0-1-1m-12.75 9a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.25 1.25m0-4.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 7.25 13M12 17.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 17.5m0-4.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 13m4.75 0A1.25 1.25 0 1 1 18 11.75 1.25 1.25 0 0 1 16.75 13M21 6.25a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 6.25 3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25" />
    </svg>
  );
};
export default calendarSvg;

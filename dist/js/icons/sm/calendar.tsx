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
      width="1rem"
      height="1rem"
      fill={props.fill}
      {...props}
    >
      <path d="M4.5 3a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3zm0 4.5A1.5 1.5 0 0 0 3 9v9a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a1.5 1.5 0 0 0-1.5-1.5zM9 12c0 1.336-1.616 2.006-2.56 1.06-.946-.944-.276-2.56 1.06-2.56A1.5 1.5 0 0 1 9 12m-3 4.5c0-1.336 1.616-2.006 2.56-1.06.946.944.276 2.56-1.06 2.56A1.5 1.5 0 0 1 6 16.5m7.5-4.5c0 1.336-1.616 2.006-2.56 1.06-.946-.944-.276-2.56 1.06-2.56a1.5 1.5 0 0 1 1.5 1.5m-3 4.5c0-1.336 1.616-2.006 2.56-1.06.946.944.276 2.56-1.06 2.56a1.5 1.5 0 0 1-1.5-1.5M18 12c0 1.336-1.616 2.006-2.56 1.06-.946-.944-.276-2.56 1.06-2.56A1.5 1.5 0 0 1 18 12" />
    </svg>
  );
};
export default calendarSvg;

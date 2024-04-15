import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const tripsSvg = (props: Props) => {
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
      <path d="M12 1.5a7.4 7.4 0 0 0-5.543 2.46v.001A2.13 2.13 0 0 0 6 5.319v16.076A1.057 1.057 0 0 0 7 22.5h10a1.057 1.057 0 0 0 1-1.105V5.386a2.2 2.2 0 0 0-.555-1.5A7.44 7.44 0 0 0 12 1.5M15 7c0 .276-.168.5-.375.5h-5.25C9.168 7.5 9 7.276 9 7v-.583a1 1 0 0 1 .23-.684A3.86 3.86 0 0 1 12 4.5a3.8 3.8 0 0 1 2.758 1.262 1.05 1.05 0 0 1 .242.71zM4.5 9v12a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 3 0m18 0v12a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 3 0" />
    </svg>
  );
};
export default tripsSvg;

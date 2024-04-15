import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const mealSvg = (props: Props) => {
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
      <path d="M4 2.98a.7.7 0 0 1 .382-.668A4.1 4.1 0 0 1 6 2a4 4 0 0 1 1.595.311.73.73 0 0 1 .405.69v2.513C8 6.5 7 7 6 7s-2-.5-2-1.486zM7.164 22A2.14 2.14 0 0 0 9 20l.68-6.944a1 1 0 0 1 .811-.898l10.693-2.005A1 1 0 0 0 22 9.17V9a1 1 0 0 0-1-1H6a12.7 12.7 0 0 0-3.453.55.85.85 0 0 0-.547.83V20a2.15 2.15 0 0 0 2 2zM21 7a.8.8 0 0 0 .848-.984A4.93 4.93 0 0 0 17 3a4.925 4.925 0 0 0-4.848 3.016A.8.8 0 0 0 13 7z" />
    </svg>
  );
};
export default mealSvg;

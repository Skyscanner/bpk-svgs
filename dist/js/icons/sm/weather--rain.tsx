import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const weatherRainSvg = (props: Props) => {
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
      <path d="M14.25 3.745a.262.262 0 0 0 .236-.397A5.622 5.622 0 0 0 4.29 5.003a1.48 1.48 0 0 1-1.092 1.04 4.166 4.166 0 0 0-.52 7.944.294.294 0 0 0 .386-.247 5.67 5.67 0 0 1 3.851-4.534.87.87 0 0 0 .562-.551 7.15 7.15 0 0 1 6.773-4.91" />
      <path d="M17.073 18.745h-1.146l-1.835 3.67a1.5 1.5 0 0 1-2.684-1.34l1.165-2.33h-1.146l-1.835 3.67a1.5 1.5 0 0 1-2.694-1.32l.01-.02 1.181-2.362a4.16 4.16 0 0 1-.391-8.168 1.47 1.47 0 0 0 1.092-1.04 5.626 5.626 0 0 1 10.654-.79 1.37 1.37 0 0 0 .96.799 4.687 4.687 0 0 1 .091 9.094l-1.903 3.808a1.5 1.5 0 1 1-2.684-1.342z" />
    </svg>
  );
};
export default weatherRainSvg;

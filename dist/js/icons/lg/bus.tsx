import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const busSvg = (props: Props) => {
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
      <path d="M2 4a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h9.518a.55.55 0 0 0 .526-.48A2.797 2.797 0 0 1 17 15a3.01 3.01 0 0 1 2.924 2.565.54.54 0 0 0 .518.435h1.826C23 18 23 16.5 23 15.5a6.72 6.72 0 0 0-1-4 6.36 6.36 0 0 0-3.525-2.442 1.34 1.34 0 0 1-.775-.432l-2.311-2.88A3.77 3.77 0 0 0 12.015 4h-1.553a.973.973 0 0 0-.888 1 .973.973 0 0 0 .888 1h1.56c1.11 0 1.622 0 2.072.603l.767 1.01A1.455 1.455 0 0 1 14.35 10h-3.4a2 2 0 0 1-1.868-1.286L7.92 5.671A1.95 1.95 0 0 0 6.023 4zm15 16a2 2 0 1 0-2.001-2A2 2 0 0 0 17 20" />
    </svg>
  );
};
export default busSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const unlockSvg = (props: Props) => {
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
      <path d="m19.392 10.281-1.77-.503A20.7 20.7 0 0 0 8 9.389V8c0-2.63 1.266-4 4-4 2.365 0 3.63 1.025 3.93 3.003A1.126 1.126 0 0 0 17 8a.896.896 0 0 0 .927-.997A5.776 5.776 0 0 0 12 2a5.94 5.94 0 0 0-6 6.154v1.731l-1.392.396A.78.78 0 0 0 4 11v8a3.226 3.226 0 0 0 3 3h10a3.226 3.226 0 0 0 3-3v-8a.78.78 0 0 0-.608-.719M14 16.602A1.557 1.557 0 0 1 12.322 18h-.644A1.557 1.557 0 0 1 10 16.602v-2.204a1.26 1.26 0 0 1 .392-.898h3.216a1.26 1.26 0 0 1 .392.898z" />
    </svg>
  );
};
export default unlockSvg;

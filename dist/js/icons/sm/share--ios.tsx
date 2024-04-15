import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const shareIosSvg = (props: Props) => {
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
        d="M3 12.75a1.5 1.5 0 0 1 1.5 1.5V18A1.5 1.5 0 0 0 6 19.5h12a1.5 1.5 0 0 0 1.5-1.5v-3.75a1.5 1.5 0 0 1 3 0V18a4.5 4.5 0 0 1-4.5 4.5H6A4.5 4.5 0 0 1 1.5 18v-3.75a1.5 1.5 0 0 1 1.5-1.5"
        clipRule="evenodd"
      />
      <path
        d="M12 15a1.5 1.5 0 0 1-1.5-1.5V6.621l-1.94 1.94a1.5 1.5 0 1 1-2.12-2.122l4.5-4.5a1.5 1.5 0 0 1 2.12 0l4.5 4.5a1.5 1.5 0 0 1-2.12 2.122L13.5 6.62v6.88A1.5 1.5 0 0 1 12 15"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default shareIosSvg;

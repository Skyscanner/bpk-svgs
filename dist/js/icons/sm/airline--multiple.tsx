import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const airlineMultipleSvg = (props: Props) => {
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
      <path d="M8.516 22.5a1.171 1.171 0 0 1-.913-1.826L19.42 2.454a1.82 1.82 0 0 1 1.5-.954h1.5c.626 0 1 .955.75 1.91l-4.317 17.35a2.236 2.236 0 0 1-2.14 1.74zm3.75-15a1.138 1.138 0 0 1 .955 1.757L6.344 19.858a2.7 2.7 0 0 0-.427 1.51 1.05 1.05 0 0 1-.912 1.132h-3.31a.833.833 0 0 1-.778-1.304l10.07-13.014a1.6 1.6 0 0 1 1.28-.682z" />
    </svg>
  );
};
export default airlineMultipleSvg;

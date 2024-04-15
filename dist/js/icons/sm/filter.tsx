import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const filterSvg = (props: Props) => {
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
        d="M7.94 1.94A1.5 1.5 0 0 0 7.5 3v.75a.75.75 0 0 1-.75.75H3a1.5 1.5 0 0 0 0 3h3.75a.75.75 0 0 1 .75.75V9a1.5 1.5 0 0 0 3 0V3a1.5 1.5 0 0 0-2.56-1.06m.282 17.56H9a1.5 1.5 0 1 0 0-3H3a1.5 1.5 0 1 0 0 3zm6.998.22a.75.75 0 0 1 .53-.22H21a1.5 1.5 0 1 0 0-3h-5.25a.75.75 0 0 1-.75-.75V15a1.5 1.5 0 1 0-3 0v6a1.5 1.5 0 1 0 3 0v-.75a.75.75 0 0 1 .22-.53M13.94 4.94A1.5 1.5 0 0 0 15 7.5h6a1.5 1.5 0 0 0 0-3h-6a1.5 1.5 0 0 0-1.06.44"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default filterSvg;

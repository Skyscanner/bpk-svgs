import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const beerSvg = (props: Props) => {
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
      <path d="M17.494 5.03a.55.55 0 0 1-.5-.53V4a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5.5a.55.55 0 0 1 .5-.53 4 4 0 0 0 0-7.94M6.994 15a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0zm10.496-4.062a.416.416 0 0 1-.495-.438v-3a.416.416 0 0 1 .495-.438 2 2 0 0 1 0 3.876" />
    </svg>
  );
};
export default beerSvg;

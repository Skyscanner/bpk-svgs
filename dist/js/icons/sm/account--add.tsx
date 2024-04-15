import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const accountAddSvg = (props: Props) => {
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
      <path d="M11.392 2.081A1.44 1.44 0 0 1 12 3.366v5.86A2.79 2.79 0 0 1 9 12a2.79 2.79 0 0 1-3-2.773V3.33a1.38 1.38 0 0 1 .572-1.248A5.1 5.1 0 0 1 9 1.5a4.97 4.97 0 0 1 2.392.581m.767 13.707a.466.466 0 0 0-.366-.569A17.6 17.6 0 0 0 9 15a17.3 17.3 0 0 0-7.855 1.865A2.07 2.07 0 0 0 0 18.75v.75a3.226 3.226 0 0 0 3 3h10.235a.543.543 0 0 0 .364-.887 6.77 6.77 0 0 1-1.44-5.825M24 17.25A5.25 5.25 0 1 1 18.75 12 5.25 5.25 0 0 1 24 17.25m-1.5 0a.75.75 0 0 0-.75-.75H19.5v-2.25a.75.75 0 0 0-1.5 0v2.25h-2.25a.75.75 0 0 0 0 1.5H18v2.25a.75.75 0 0 0 1.5 0V18h2.25a.75.75 0 0 0 .75-.75" />
    </svg>
  );
};
export default accountAddSvg;
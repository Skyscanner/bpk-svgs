import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const servicesSvg = (props: Props) => {
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
      <path d="M10.382.312A.7.7 0 0 0 10 .98v2.534C10 4.5 11 5 12 5s2-.5 2-1.486V1a.73.73 0 0 0-.405-.689A4 4 0 0 0 12 .001a4.1 4.1 0 0 0-1.618.311M16 7.302v2.396a.51.51 0 0 1-.57.502 32 32 0 0 0-3.377-.2 29 29 0 0 0-3.476.25A.51.51 0 0 1 8 9.747v-2.37a.85.85 0 0 1 .547-.827A11.8 11.8 0 0 1 11 6.061c.386-.04.744 1.94 1.035 1.94.277 0 .608-1.988.965-1.959a11.2 11.2 0 0 1 2.452.436.84.84 0 0 1 .548.823zM17 16a1 1 0 0 0 1-1v-2.698a.92.92 0 0 0-.822-.824A28 28 0 0 0 12.053 11a28 28 0 0 0-5.232.55.93.93 0 0 0-.821.83V15a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1z" />
    </svg>
  );
};
export default servicesSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const weatherThunderstormSvg = (props: Props) => {
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
      <path d="M14.486 2.601a.262.262 0 0 1-.236.397 7.15 7.15 0 0 0-6.773 4.91.87.87 0 0 1-.562.551 5.67 5.67 0 0 0-3.851 4.534.294.294 0 0 1-.386.247 4.165 4.165 0 0 1 .52-7.942 1.47 1.47 0 0 0 1.092-1.04 5.621 5.621 0 0 1 10.196-1.657" />
      <path d="M22.087 16.672c-.054.157.139.34.265.232a4.695 4.695 0 0 0-1.948-8.137 1.38 1.38 0 0 1-.96-.798 5.626 5.626 0 0 0-10.654.787 1.48 1.48 0 0 1-1.092 1.041 4.167 4.167 0 0 0-.564 7.927.326.326 0 0 0 .409-.358 2.2 2.2 0 0 1 .48-1.508l5.958-7.582A2.25 2.25 0 0 1 18 9.666v3.382a.45.45 0 0 0 .45.45h1.36a2.405 2.405 0 0 1 2.277 3.174" />
      <path d="m15.175 9.27-6 7.5A.75.75 0 0 0 9.751 18h3a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 0 1.327.48l6-7.5a.75.75 0 0 0-.577-1.23h-3a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-1.326-.48" />
    </svg>
  );
};
export default weatherThunderstormSvg;

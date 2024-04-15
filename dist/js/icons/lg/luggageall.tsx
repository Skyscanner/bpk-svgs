import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const luggageallSvg = (props: Props) => {
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
      <path d="M3 18a3 3 0 0 0 2.502 2.959c.272.045.498-.183.498-.459v-13c0-.276-.226-.504-.498-.459A3 3 0 0 0 3 10zm4 4a1 1 0 1 0 2 0v-1h6v1a1 1 0 1 0 2 0V4.01c0-.37-.102-.79-.383-1.15C16.06 2.143 14.5 1 12 1S7.846 2.16 7.306 2.936A1.8 1.8 0 0 0 7 3.958zm8-17.607V7H9V4.348c0-.221.07-.44.228-.594C9.612 3.383 10.5 3 12 3s2.358.378 2.762.776a.86.86 0 0 1 .238.617m3.498 16.566c-.273.045-.498-.183-.498-.459v-13c0-.276.226-.504.498-.459A3 3 0 0 1 21 10v8a3 3 0 0 1-2.502 2.959" />
    </svg>
  );
};
export default luggageallSvg;

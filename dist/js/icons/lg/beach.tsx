import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const beachSvg = (props: Props) => {
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
      <path d="M12 2c-4.376 0-9.038 4-9.96 8.016A1.71 1.71 0 0 0 3.857 12h.381a.815.815 0 0 0 .793-.62C5.703 8.642 7.745 3.39 12 2m0 0c4.255 1.39 6.297 6.642 6.969 9.38a.815.815 0 0 0 .793.62h.381a1.71 1.71 0 0 0 1.817-1.984C21.038 6 16.376 2 12 2" />
      <path d="M12 2c-1.377 1.349-4.578 5.963-5.008 9.004a.896.896 0 0 0 .926.996h8.164a.897.897 0 0 0 .926-.996C16.578 7.963 13.377 3.349 12 2m0 11a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1" />
    </svg>
  );
};
export default beachSvg;

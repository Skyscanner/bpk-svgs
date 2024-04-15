import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const informationCircleSvg = (props: Props) => {
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
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m.993 14.116a1 1 0 0 1-1.986.001L11 16l-.002-5.001.007-.117a1 1 0 0 1 1.986 0l.007.117L13 16zm-.995-7.12a.999.999 0 0 1 0-1.997h.063a.999.999 0 1 1-.063 1.997" />
    </svg>
  );
};
export default informationCircleSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const helpCircleSvg = (props: Props) => {
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
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1m2.079-5.334a5 5 0 0 1-.472.34l-.044.03a4 4 0 0 0-.364.267c-.161.143-.191.224-.191.34V13a1 1 0 0 1-2 0v-.357a2.39 2.39 0 0 1 .872-1.842 5 5 0 0 1 .571-.426l.021-.014q.164-.104.316-.223a.6.6 0 0 0 .173-.671c-.066-.175-.283-.467-.953-.467-.588 0-.793.181-.866.266a.63.63 0 0 0-.142.392 1 1 0 0 1-2 0 2.63 2.63 0 0 1 .629-1.701A3.02 3.02 0 0 1 12.008 7a2.86 2.86 0 0 1 2.822 1.755 2.6 2.6 0 0 1-.751 2.911" />
    </svg>
  );
};
export default helpCircleSvg;

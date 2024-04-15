import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const childSvg = (props: Props) => {
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
      <path d="M12 4a2.5 2.5 0 0 0-.96.182.43.43 0 0 0-.24.418v1.508c0 .592.6.892 1.2.892s1.2-.3 1.2-.892V4.6a.44.44 0 0 0-.243-.413A2.4 2.4 0 0 0 12 4m3 5.302v3.921a1.5 1.5 0 0 1-.254.85q-.101.138-.214.277a1.8 1.8 0 0 0-.477.88l-.408 3.875a1 1 0 0 1-.994.895h-1.235a1 1 0 0 1-.995-.895l-.408-3.875a1.8 1.8 0 0 0-.563-.943q-.08-.086-.157-.175A1.23 1.23 0 0 1 9 13.3V9.378a.92.92 0 0 1 .536-.856 6.3 6.3 0 0 1 2.5-.523 6.2 6.2 0 0 1 2.428.45.91.91 0 0 1 .536.852z" />
    </svg>
  );
};
export default childSvg;

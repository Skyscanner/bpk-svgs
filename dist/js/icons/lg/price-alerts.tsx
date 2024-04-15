import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const priceAlertsSvg = (props: Props) => {
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
      <path d="M12 2.5a7.095 7.095 0 0 0-7.186 7v.64a9.8 9.8 0 0 1-1.084 4.47l-.51.995A2.002 2.002 0 0 0 5.055 18.5h13.888a2.003 2.003 0 0 0 1.837-2.894l-.51-.995a9.8 9.8 0 0 1-1.085-4.472V9.5A7.095 7.095 0 0 0 12 2.5M9.076 20.459c-.265-.485.204-.959.756-.959h4.34c.551 0 1.02.474.754.959a2.3 2.3 0 0 1-1.932 1.041h-2a2.27 2.27 0 0 1-1.918-1.041" />
    </svg>
  );
};
export default priceAlertsSvg;

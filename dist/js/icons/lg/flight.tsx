import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const flightSvg = (props: Props) => {
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
      <path d="M19.616 3.047a6 6 0 0 0-2.536 1.547l-8.188 8.373a3.4 3.4 0 0 0-.403.498l-1.287 1.186a.9.9 0 0 1-.594.24l-2.58.05a.91.91 0 0 0-.976.616.943.943 0 0 0 .473 1.155l2.56 1.012a.9.9 0 0 1 .492.468l1.038 2.27a.905.905 0 0 0 1.16.474.934.934 0 0 0 .575-.987l-.114-2.36a.92.92 0 0 1 .282-.709l1.173-1.12a3.4 3.4 0 0 0 .54-.448l1.27-1.298.609.621 2.886 6.062a.452.452 0 0 0 .732.123l.504-.516a1.88 1.88 0 0 0 .487-1.728l-1.582-7.085a1.84 1.84 0 0 1 .478-1.685l2.887-2.952a6.15 6.15 0 0 0 1.41-2.28l.022-.059a1.112 1.112 0 0 0-1.318-1.469z" />
      <path d="M12.03 8.22a.458.458 0 0 0-.257-.765L5.517 6.068a1.79 1.79 0 0 0-1.69.498l-.52.53a.46.46 0 0 0 .12.73L9.073 10.9c.358.18.56-.104.833-.399z" />
    </svg>
  );
};
export default flightSvg;

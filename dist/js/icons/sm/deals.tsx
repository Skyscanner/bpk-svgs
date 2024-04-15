import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const dealsSvg = (props: Props) => {
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
      <path d="m21.996 5.244-1.605-2.408h-.001A3 3 0 0 0 17.895 1.5H6.106a3 3 0 0 0-2.497 1.336L2.004 5.244A3 3 0 0 0 1.5 6.908V19.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.908a3 3 0 0 0-.504-1.664M12 18a6 6 0 0 1-6-6 1.5 1.5 0 0 1 3 0 3 3 0 0 0 6 0 1.5 1.5 0 0 1 3 0 6 6 0 0 1-6 6m6.621-10.579a.75.75 0 0 1-.334.079H5.713a.75.75 0 0 1-.671-1.085l.542-1.086h.002A1.5 1.5 0 0 1 6.927 4.5h10.146a1.5 1.5 0 0 1 1.342.83l.542 1.085a.75.75 0 0 1-.336 1.006" />
    </svg>
  );
};
export default dealsSvg;

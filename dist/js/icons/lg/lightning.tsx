import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const lightningSvg = (props: Props) => {
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
      <path d="M11.91 22.77a.424.424 0 0 1-.8-.217v-6.944a.437.437 0 0 0-.428-.446H5.427a.446.446 0 0 1-.373-.663l7.035-13.27a.424.424 0 0 1 .8.217v6.944a.44.44 0 0 0 .429.446h5.255a.446.446 0 0 1 .374.663z" />
    </svg>
  );
};
export default lightningSvg;

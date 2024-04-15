import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const aircraftSvg = (props: Props) => {
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
      <path d="M7.203 2.65 9.28 9.297a1 1 0 0 0 .954.702h3.815a.5.5 0 0 0 .411-.783L9.798 2.433A1 1 0 0 0 8.974 2H7.68a.5.5 0 0 0-.477.65" />
      <path d="M4.7 10.587a1 1 0 0 0 .81.413h14.798a3.8 3.8 0 0 1 2.077.6l.153.1a.924.924 0 0 1 0 1.6l-.153.1a3.8 3.8 0 0 1-2.077.6h-4.784a1 1 0 0 0-.822.431L9.794 21.53a1 1 0 0 1-.848.47H7.68a.5.5 0 0 1-.477-.65l2.094-6.7A.5.5 0 0 0 8.82 14H5.564a1 1 0 0 0-.856.482l-1.277 2.11a1.28 1.28 0 0 1-1.403.323h-.002a.985.985 0 0 1-.623-1.299l1.096-2.62a1.53 1.53 0 0 0 0-.996L1.067 9.395a1.005 1.005 0 0 1 .607-1.29 1.27 1.27 0 0 1 1.437.292z" />
    </svg>
  );
};
export default aircraftSvg;

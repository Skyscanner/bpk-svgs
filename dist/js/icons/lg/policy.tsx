import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const policySvg = (props: Props) => {
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
      <path d="M18 2h-7.94a2.89 2.89 0 0 0-1.992.786l-4.242 4.04A2.62 2.62 0 0 0 3 8.724v10.419A2.93 2.93 0 0 0 6 22h12a2.93 2.93 0 0 0 3-2.857V5a3.226 3.226 0 0 0-3-3M8.624 7.256a.3.3 0 0 1-.3.3H5.98a.3.3 0 0 1-.21-.514l2.344-2.315a.3.3 0 0 1 .51.213zM17 13.412c0 2.634-2.47 4.579-3.528 5.291a.84.84 0 0 1-.944 0C11.47 17.991 9 16.046 9 13.412V9.898a.57.57 0 0 1 .372-.538 10.33 10.33 0 0 1 7.256 0 .57.57 0 0 1 .372.538z" />
    </svg>
  );
};
export default policySvg;
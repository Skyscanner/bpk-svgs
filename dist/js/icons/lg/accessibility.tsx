import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const accessibilitySvg = (props: Props) => {
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
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8M11 7.597V6.445a.31.31 0 0 1 .19-.303A2.2 2.2 0 0 1 12 6a2.2 2.2 0 0 1 .797.141.33.33 0 0 1 .203.314v1.142c0 .448-.5.676-1 .676s-1-.228-1-.676m5.996 1.932a.525.525 0 0 1-.469.518l-2.35.235a1 1 0 0 0-.895.896l-.093.936a1 1 0 0 0 .005.241l.72 5.047a.524.524 0 0 1-1.023.218l-.795-2.784a.1.1 0 0 0-.192 0l-.795 2.784a.524.524 0 0 1-1.024-.218l.721-5.047a1 1 0 0 0 .005-.24l-.093-.937a1 1 0 0 0-.896-.896l-2.35-.235A.525.525 0 0 1 7.525 9h8.95a.525.525 0 0 1 .521.529" />
    </svg>
  );
};
export default accessibilitySvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const infantSvg = (props: Props) => {
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
      <path d="M12 6a1.8 1.8 0 0 0-.8.182.45.45 0 0 0-.2.418v1.508A.92.92 0 0 0 12 9a.92.92 0 0 0 1-.892V6.6a.46.46 0 0 0-.204-.413A1.7 1.7 0 0 0 12 6m3.107 3.426a.52.52 0 0 1 .739-.002l.001.002a.527.527 0 0 1 0 .742l-1.172 1.176a3.54 3.54 0 0 0-1.022 2.212l-.285 3.525a1 1 0 0 1-.997.92h-.742a1 1 0 0 1-.996-.92l-.287-3.525a3.54 3.54 0 0 0-1.02-2.212l-1.173-1.176a.524.524 0 0 1 .738-.743v.001l1.543 1.547A2.1 2.1 0 0 0 12 11.5a2.1 2.1 0 0 0 1.566-.527z" />
    </svg>
  );
};
export default infantSvg;

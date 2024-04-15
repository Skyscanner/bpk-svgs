import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const cloakroomSvg = (props: Props) => {
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
      <path d="M21.295 16.926 15.04 12.08 15 12h-.064l-1.137-.88a3 3 0 0 0-.299-.205v-.406a.5.5 0 0 1 .085-.127 2.1 2.1 0 0 1 .574-.433A4.5 4.5 0 1 0 7.5 6a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 1 2.218 1.318 5 5 0 0 0-1.41 1.11A3.17 3.17 0 0 0 10.5 10.5v.415a3 3 0 0 0-.299.204L9.064 12H9l-.022.067-6.273 4.859a3.114 3.114 0 0 0 1.8 5.574h14.99a3.113 3.113 0 0 0 1.8-5.574m-2.238 2.478H4.943a.15.15 0 0 1-.093-.27l3.28-2.54a.45.45 0 0 1 .276-.094h7.188a.45.45 0 0 1 .275.094l3.28 2.54a.15.15 0 0 1-.092.27" />
    </svg>
  );
};
export default cloakroomSvg;
import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const mapSvg = (props: Props) => {
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
      <path d="M21.971 3.902a1.004 1.004 0 0 0-1.213-.738l-6.399 1.624a1 1 0 0 1-.69-.077l-2.948-1.497a1.97 1.97 0 0 0-1.491-.122l-5.827 1.85A2.03 2.03 0 0 0 2 6.88v12.941a1.004 1.004 0 0 0 1.243.985l6.398-1.624a1 1 0 0 1 .69.077l3.007 1.527a1.97 1.97 0 0 0 1.38.153l5.767-1.463A2.025 2.025 0 0 0 22 17.506V4.148a1 1 0 0 0-.029-.246M14 18.27a.5.5 0 0 1-.724.454l-3-1.523a.51.51 0 0 1-.276-.454V5.7a.5.5 0 0 1 .723-.454h.001l3 1.523a.51.51 0 0 1 .276.454z" />
    </svg>
  );
};
export default mapSvg;
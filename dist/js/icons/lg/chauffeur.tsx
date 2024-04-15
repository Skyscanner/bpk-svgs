import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const chauffeurSvg = (props: Props) => {
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
      <path d="M8.304 6.039a.7.7 0 0 0 .627.369H9v3.622c0 1.578 1.5 2.378 3 2.378s3-.8 3-2.378V6.408h.07a.7.7 0 0 0 .626-.37l.23-.437a.65.65 0 0 0-.238-.853l-3.152-2a1 1 0 0 0-1.072 0l-3.152 2a.65.65 0 0 0-.238.853zM11 9.408h2v.028a1 1 0 0 1-2 0zm9 8.25v.977a2.86 2.86 0 0 1-2.502 2.734.47.47 0 0 1-.517-.461 4.687 4.687 0 0 0-4.981-4.5A4.685 4.685 0 0 0 7.02 20.9a.47.47 0 0 1-.525.46A2.895 2.895 0 0 1 4 18.634v-.995a1.77 1.77 0 0 1 .99-1.634 16.9 16.9 0 0 1 6.982-1.597 17.3 17.3 0 0 1 7.016 1.6A1.78 1.78 0 0 1 20 17.658m-4.03 3.25a.457.457 0 0 1-.47.5h-7a.457.457 0 0 1-.47-.5 4 4 0 0 1 7.94 0" />
    </svg>
  );
};
export default chauffeurSvg;

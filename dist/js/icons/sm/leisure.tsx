import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const leisureSvg = (props: Props) => {
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
      <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5m7.331 14.606a.98.98 0 0 1-.944.478l-2.503-.21a1.05 1.05 0 0 0-1.101.771l-.658 2.424a.98.98 0 0 1-.774.723h-.001a8.5 8.5 0 0 1-2.7 0 .98.98 0 0 1-.774-.723l-.658-2.424a1.05 1.05 0 0 0-1.101-.771l-2.503.21a.98.98 0 0 1-.944-.478 8.3 8.3 0 0 1-.924-2.54.98.98 0 0 1 .415-.973l2.053-1.447a1.05 1.05 0 0 0 .348-1.3L5.509 7.569a.98.98 0 0 1 .127-1.051A8.4 8.4 0 0 1 8.35 4.433a.98.98 0 0 1 1.049.148l1.93 1.609a1.05 1.05 0 0 0 1.344 0l1.93-1.609a.98.98 0 0 1 1.049-.148 8.4 8.4 0 0 1 2.986 2.417.98.98 0 0 1 .098 1.014l-1.037 2.243a1.05 1.05 0 0 0 .348 1.298l1.78 1.256a.97.97 0 0 1 .414.98 8.3 8.3 0 0 1-.91 2.465m-4.362-4.538-.672 2.648a1.045 1.045 0 0 1-1.018.784h-2.558a1.05 1.05 0 0 1-1.018-.784l-.672-2.648a1.03 1.03 0 0 1 .436-1.112h.001l1.95-1.282a1.06 1.06 0 0 1 1.165 0l1.95 1.282a1.03 1.03 0 0 1 .436 1.112" />
    </svg>
  );
};
export default leisureSvg;
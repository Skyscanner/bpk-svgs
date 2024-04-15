import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const heartOutlineSvg = (props: Props) => {
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
      <path d="M20.391 4.649a4.77 4.77 0 0 0-6.62-.577l-1.136.959a.98.98 0 0 1-1.27 0l-1.135-.96a4.77 4.77 0 0 0-6.62.578 5.51 5.51 0 0 0-1.39 5.408c.855 3.72 5.28 7.895 8.62 10.537a1.86 1.86 0 0 0 2.32 0c3.34-2.642 7.765-6.816 8.62-10.537a5.52 5.52 0 0 0-1.389-5.408m-.519 4.79-.022.073-.017.073a13.3 13.3 0 0 1-3.475 5.38 40 40 0 0 1-3.75 3.464.95.95 0 0 1-1.216 0 40 40 0 0 1-3.75-3.464 13.3 13.3 0 0 1-3.475-5.38l-.017-.073-.022-.072a3.42 3.42 0 0 1 .88-3.323v-.001a3.26 3.26 0 0 1 1.943-1.05 3.05 3.05 0 0 1 2.074.647l1.704 1.44a1.96 1.96 0 0 0 2.542 0l1.705-1.44a3.04 3.04 0 0 1 2.073-.646 3.24 3.24 0 0 1 1.943 1.05 3.42 3.42 0 0 1 .88 3.323z" />
    </svg>
  );
};
export default heartOutlineSvg;
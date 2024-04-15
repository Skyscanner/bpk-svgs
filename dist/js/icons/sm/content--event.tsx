import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const contentEventSvg = (props: Props) => {
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
      <path d="M23.258 9.093A.925.925 0 0 0 24 8.25V4.5a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v3.75a.925.925 0 0 0 .742.843 3 3 0 0 1 2.162 2.162 3 3 0 0 1-2.162 3.652.925.925 0 0 0-.742.843v3.75a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-3.75a.925.925 0 0 0-.742-.843 3.001 3.001 0 0 1 0-5.814m-6.859 2.181-1.795 1.831a.45.45 0 0 0-.123.388l.425 2.593a.341.341 0 0 1-.49.373l-2.198-1.213a.45.45 0 0 0-.434 0l-2.198 1.213a.341.341 0 0 1-.49-.373l.427-2.593a.45.45 0 0 0-.123-.388l-1.798-1.831a.358.358 0 0 1 .187-.603l2.465-.373a.45.45 0 0 0 .34-.253h.001l1.104-2.348a.33.33 0 0 1 .604 0l1.104 2.348a.45.45 0 0 0 .34.253l2.465.373a.358.358 0 0 1 .187.603" />
    </svg>
  );
};
export default contentEventSvg;

import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const callBackSvg = (props: Props) => {
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
      <path d="M5.706 15.258a.85.85 0 0 1-.372-.551A14 14 0 0 1 5.067 12c0-.92.094-1.824.267-2.707a.85.85 0 0 1 .372-.55l2.532-1.637C8.72 6.793 9 6.332 9 5.844V3.223c0-.779-.706-1.451-1.69-1.609l-1.192-.108a1.55 1.55 0 0 0-1.422.66C2.66 5.093 1.5 8.442 1.5 12.002c0 3.559 1.16 6.906 3.195 9.832a1.55 1.55 0 0 0 1.424.66l1.191-.109c.984-.157 1.69-.829 1.69-1.607v-2.621c0-.487-.28-.95-.762-1.261l-2.532-1.637z" />
      <path d="M14.56 6.44a1.5 1.5 0 0 1 0 2.12l-1.939 1.94H21a1.5 1.5 0 0 1 0 3h-8.379l1.94 1.94a1.5 1.5 0 0 1-2.122 2.12l-4.5-4.5a1.5 1.5 0 0 1 0-2.12l4.5-4.5a1.5 1.5 0 0 1 2.122 0z" />
    </svg>
  );
};
export default callBackSvg;

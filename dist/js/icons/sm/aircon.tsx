import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const airconSvg = (props: Props) => {
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
      <path d="M12 0a1.5 1.5 0 0 0-1.5 1.5v2.379l-1.94-1.94a1.5 1.5 0 1 0-2.157 2.085l.037.037 4.06 4.06V10.5H8.121l-4.06-4.06a1.5 1.5 0 0 0-2.159 2.083l.037.037 1.94 1.94H1.5a1.5 1.5 0 0 0 0 3h2.379l-1.94 1.94a1.5 1.5 0 0 0 2.122 2.12l4.06-4.06H10.5v2.379l-4.06 4.06a1.5 1.5 0 0 0 2.12 2.122l1.94-1.94V22.5a1.5 1.5 0 0 0 3 0v-2.379l1.94 1.94a1.5 1.5 0 0 0 2.12-2.122l-4.06-4.06V13.5h2.379l4.06 4.06a1.5 1.5 0 0 0 2.122-2.12l-1.94-1.94H22.5a1.5 1.5 0 0 0 0-3h-2.379l1.94-1.94a1.5 1.5 0 0 0-2.122-2.12l-4.06 4.06H13.5V8.121l4.06-4.06a1.5 1.5 0 0 0-2.12-2.122L13.5 3.88V1.5A1.5 1.5 0 0 0 12 0" />
    </svg>
  );
};
export default airconSvg;

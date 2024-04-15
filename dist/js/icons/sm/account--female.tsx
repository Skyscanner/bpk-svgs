import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const accountFemaleSvg = (props: Props) => {
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
      <path d="M8.756 3.943c.909-3.147 3.568-2.792 4.541-1.5.973-.355 1.816-.132 2.27 1.706a5.5 5.5 0 0 1 .08 2.109 12 12 0 0 0-.08 1.245 4.72 4.72 0 0 0 .745 3.069c.197.2.28.575.046.712a7.1 7.1 0 0 1-3.223.716h-2.27a7.1 7.1 0 0 1-3.223-.716c-.234-.137-.15-.513.046-.713a4.7 4.7 0 0 0 .744-3.068 13.7 13.7 0 0 1 .324-3.56M12 15a17.3 17.3 0 0 0-7.855 1.865A2.07 2.07 0 0 0 3 18.75v.75a3.226 3.226 0 0 0 3 3h12a3.226 3.226 0 0 0 3-3v-.75a2 2 0 0 0-1.107-1.883A17.6 17.6 0 0 0 12 15" />
    </svg>
  );
};
export default accountFemaleSvg;
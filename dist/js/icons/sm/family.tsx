import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const familySvg = (props: Props) => {
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
      <path d="M3.3 1.774A2.64 2.64 0 0 1 4.5 1.5a2.56 2.56 0 0 1 1.196.28A.69.69 0 0 1 6 2.4v2.262A1.377 1.377 0 0 1 4.5 6 1.377 1.377 0 0 1 3 4.662V2.4a.68.68 0 0 1 .3-.626m4.2 12.061V9.452a1.51 1.51 0 0 0-.536-1.277A4.44 4.44 0 0 0 4.535 7.5a4.58 4.58 0 0 0-2.5.784A1.54 1.54 0 0 0 1.5 9.568v4.383a2.46 2.46 0 0 0 .295 1.217q.076.13.157.263a3.14 3.14 0 0 1 .563 1.414l.408 4.312c.054.764.483 1.343.995 1.343h1.235c.511 0 .94-.58.994-1.343l.408-4.312a3.3 3.3 0 0 1 .477-1.32c.074-.14.148-.277.214-.417a3.1 3.1 0 0 0 .254-1.273m3.3-7.56A2.64 2.64 0 0 1 12 6a2.56 2.56 0 0 1 1.196.28.69.69 0 0 1 .304.62v2.262A1.377 1.377 0 0 1 12 10.5a1.377 1.377 0 0 1-1.5-1.338V6.9a.68.68 0 0 1 .3-.626zm4.2 9.06v-1.383a1.51 1.51 0 0 0-.536-1.277A4.44 4.44 0 0 0 12.035 12a4.58 4.58 0 0 0-2.5.784A1.54 1.54 0 0 0 9 14.068v1.383a2.46 2.46 0 0 0 .295 1.217q.075.13.157.263a3.1 3.1 0 0 1 .563 1.414l.408 2.812c.054.764.483 1.343.995 1.343h1.235c.511 0 .94-.58.994-1.343l.408-2.812a3.3 3.3 0 0 1 .477-1.32q.113-.209.214-.417A3.1 3.1 0 0 0 15 15.335m5.149-13.43a1.341 1.341 0 0 0-2.27.642 5 5 0 0 0-.163 1.526 1.8 1.8 0 0 1-.372 1.315c-.098.085-.14.247-.023.305A4 4 0 0 0 18.932 6h1.136a4 4 0 0 0 1.611-.307c.117-.058.075-.22-.023-.305a1.8 1.8 0 0 1-.372-1.315 4 4 0 0 1 .04-.534 2 2 0 0 0-.04-.904c-.227-.787-.649-.883-1.135-.73M16.5 9.452v2.883a3.1 3.1 0 0 0 .254 1.273q.101.21.214.417a3.66 3.66 0 0 1 .497 1.614l-.825 3.302a.45.45 0 0 0 .436.56h.66l.117 1.656c.053.764.483 1.343.994 1.343h1.306c.511 0 .94-.58.994-1.343l.117-1.657h.66a.45.45 0 0 0 .436-.56l-.825-3.3a3.66 3.66 0 0 1 .497-1.615q.113-.208.214-.417a3.1 3.1 0 0 0 .254-1.273V9.452a1.51 1.51 0 0 0-.536-1.277 4.44 4.44 0 0 0-2.429-.675h-.07a4.44 4.44 0 0 0-2.429.675 1.51 1.51 0 0 0-.536 1.277" />
    </svg>
  );
};
export default familySvg;

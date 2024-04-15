import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const socialDistancingSvg = (props: Props) => {
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
      <path d="M3.3 1.774A2.64 2.64 0 0 1 4.5 1.5c.526 0 .93.14 1.196.28.2.106.304.358.304.62v2.262C6 5.55 5.25 6 4.5 6S3 5.55 3 4.662V2.4c0-.266.096-.521.3-.626m3.67 6.924c.148-.156.175-.41-.006-.523-.756-.471-1.55-.675-2.429-.675-.882 0-1.724.282-2.5.784-.336.218-.535.733-.535 1.284v4.383c0 .476.112.9.295 1.217q.076.13.156.262c.257.422.525.864.564 1.415l.408 4.312c.054.764.483 1.343.995 1.343h1.235c.511 0 .94-.58.994-1.343l.257-2.711A1.5 1.5 0 0 0 6 17.275L3.41 14.53a1.5 1.5 0 0 1 0-2.06l3.562-3.772zm10.69 9.68a1.5 1.5 0 0 1 .403-1.17l2.528-2.678a1.5 1.5 0 0 0 0-2.06l-3.568-3.778c-.114-.122-.127-.317.012-.408.776-.502 1.618-.784 2.5-.784.88 0 1.673.204 2.429.675.338.211.536.727.536 1.277v4.383c0 .473-.092.927-.254 1.273-.066.14-.14.278-.214.417-.218.406-.442.823-.477 1.32l-.408 4.312c-.053.764-.483 1.343-.994 1.343h-1.235c-.512 0-.941-.58-.995-1.343zM19.5 1.5c-.518 0-.932.135-1.2.274-.204.105-.3.36-.3.626v2.262C18 5.55 18.75 6 19.5 6S21 5.55 21 4.662V2.4c0-.262-.104-.514-.304-.62-.267-.14-.67-.28-1.196-.28" />
      <path d="m13.663 11.56.415.44H9.922l.415-.44a1.563 1.563 0 0 0 0-2.12 1.36 1.36 0 0 0-2.003 0l-3.348 3.545a.75.75 0 0 0 0 1.03l3.348 3.546c.553.585 1.45.585 2.003 0a1.564 1.564 0 0 0 0-2.122L9.922 15h4.156l-.415.44a1.564 1.564 0 0 0 0 2.12 1.36 1.36 0 0 0 2.003 0l3.348-3.545a.75.75 0 0 0 0-1.03L15.666 9.44a1.36 1.36 0 0 0-2.003 0 1.563 1.563 0 0 0 0 2.122z" />
    </svg>
  );
};
export default socialDistancingSvg;

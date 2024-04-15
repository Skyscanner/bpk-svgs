import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const baggageRemoveSvg = (props: Props) => {
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
      <path d="M23.56.44a1.5 1.5 0 0 0-2.12 0l-3.76 3.758a2 2 0 0 0-.235-.312C16.547 2.913 14.693 1.5 12 1.5c-2.703 0-4.688 1.426-5.543 2.46C6.111 4.38 6 4.895 6 5.32v1.43a.75.75 0 0 1-.75.75H4.5a3 3 0 0 0-3 3v9q0 .405.102.777L.439 21.44a1.5 1.5 0 0 0 2.122 2.122l1.162-1.163c-.07-.013.069.019 0 0L18.63 7.491c.039.006-.04 0 0 0l4.93-4.93a1.5 1.5 0 0 0 0-2.122zM15 7c0 .276-.168.5-.375.5h-5.25C9.168 7.5 9 7.276 9 7v-.583c0-.264.075-.52.23-.684C9.751 5.176 10.721 4.5 12 4.5c1.276 0 2.208.676 2.758 1.262.16.171.242.436.242.71zm6.91 1.712L8.12 22.5H19.5a3 3 0 0 0 3-3v-9c0-.67-.22-1.289-.59-1.788" />
    </svg>
  );
};
export default baggageRemoveSvg;

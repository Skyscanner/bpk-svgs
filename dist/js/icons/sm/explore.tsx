import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const exploreSvg = (props: Props) => {
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
      <path d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5 0 .887-.11 1.748-.317 2.57a6 6 0 0 0-6.276-4.041c.055-.35-.236-.79-.614-.908a4.6 4.6 0 0 0-1.57.033c-.479.02-1.049-.177-1.2-.606l-.032-.136-.007-.08-.008-.176c-.007-.124-.03-.24-.126-.31a.44.44 0 0 0-.41-.002q-.811.396-1.547.916a1.78 1.78 0 0 1-1.521.242l-.19-.068.056-1.017.08-.079a.8.8 0 0 1 .325-.13l.125-.022.287-.036c.254-.034.473-.092.522-.325a1.7 1.7 0 0 0-.022-.378c-.003-.273.175-.458.413-.614l.124-.075.529-.287.123-.075c.239-.156.418-.34.417-.613a2 2 0 0 0-.199-.612 1.6 1.6 0 0 1-.038-.291v-.145l.026-.214-.097.007-.327.035a7.501 7.501 0 0 0 .257 14.903 6.02 6.02 0 0 0 3.288 2.717c-.823.207-1.684.317-2.571.317-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5" />
      <path d="M11.27 11.063c.781.235 1.635.21 2.489.098a6 6 0 0 0-3.222 6.005 1 1 0 0 1-.106-.035l-.072-.032-.113-.06c-.102-.052-.202-.067-.493.046a2.09 2.09 0 0 1-2.269-.742 4.5 4.5 0 0 1-.844-2.37c.006-.275.09-.542.242-.77.044-.088.143-.17.26-.248l.121-.075.24-.14.104-.065.084-.063.305-.258c.377-.326.663-.613.803-1.097l.051-.22 2.1-.087zM9.658 5.05c.175-.026.331.207.46.482l.053.12.108.273.113.304.026.062.028.045q.006.006.01.004-.501.155-.99.35l-.484.204-.316-.367-.02-.042-.008-.047.027-.058.11-.118.07-.096.072-.114.321-.555.086-.135c.114-.17.227-.297.334-.312" />
      <path d="M16.5 21a4.5 4.5 0 0 0 2.286-.623l2.168 2.169a1.125 1.125 0 0 0 1.591-1.591l-2.168-2.169A4.5 4.5 0 1 0 16.5 21m0-2.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5" />
    </svg>
  );
};
export default exploreSvg;
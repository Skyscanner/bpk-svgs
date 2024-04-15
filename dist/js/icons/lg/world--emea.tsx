import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const worldEmeaSvg = (props: Props) => {
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
      <path d="M10.53 6.61q-.716.222-1.404.527l-.271-.315a.17.17 0 0 1-.056-.12.17.17 0 0 1 .067-.098c.101-.092.219-.3.343-.52.185-.326.383-.677.56-.703.273-.04.498.577.636.952.06.166.103.284.125.277" />
      <path d="M2.762 8.173a10 10 0 1 1 18.477 7.654A10 10 0 0 1 2.762 8.173m12.162 2.824q.319-.058.63-.11c.394-.31.062-1.002-.417-1.153a4.4 4.4 0 0 0-1.496.032c-.501.02-1.108-.208-1.173-.706a2 2 0 0 1-.01-.155c-.005-.15-.01-.3-.124-.385a.42.42 0 0 0-.391-.001 10.5 10.5 0 0 0-1.473.871 1.7 1.7 0 0 1-1.63.166l.053-.968c.142-.18.405-.21.656-.24.29-.033.566-.065.62-.324a1.7 1.7 0 0 0-.021-.36c-.005-.39.38-.592.763-.793.384-.201.768-.403.766-.792a2 2 0 0 0-.189-.583 1.52 1.52 0 0 1 .497-1.495 8 8 0 0 0 .016 16q.084-.002.168-.009l.117-.006a11 11 0 0 1-.157-1.75c0-.23-.138-.251-.293-.275-.146-.023-.306-.048-.377-.253l-.05-.15c-.111-.34-.185-.566-.575-.6a1 1 0 0 1-.454-.132c-.121-.067-.196-.109-.52.017a1.99 1.99 0 0 1-2.16-.706 4.3 4.3 0 0 1-.805-2.258c.006-.261.086-.516.23-.733.07-.14.286-.264.482-.377.114-.065.22-.127.29-.186l.13-.11c.493-.418.854-.723.973-1.39L11 11c1.198.49 2.608.235 3.924-.003m1.08 1.731a4.93 4.93 0 0 0 3.191 2.747q.32-.66.514-1.367l-.618.124a.7.7 0 0 1-.48-.016.7.7 0 0 1-.246-.295 9.3 9.3 0 0 1-.852-2.18l-1.264.513a.43.43 0 0 0-.267.207.4.4 0 0 0 .022.267" />
    </svg>
  );
};
export default worldEmeaSvg;

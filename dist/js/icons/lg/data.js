import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M20.468 10.416a.912.912 0 00.926-1.1 9.076 9.076 0 00-6.71-6.71.913.913 0 00-1.1.928v5.882a1 1 0 001 1z" /><path d="M19.585 12.416a.92.92 0 01.945.998 9.001 9.001 0 11-9.943-9.943.92.92 0 01.998.945v6a2 2 0 002 2z" /></svg>);
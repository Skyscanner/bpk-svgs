import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.5 3A1.5 1.5 0 0112 1.5a10.493 10.493 0 11-9.547 6.124 1.5 1.5 0 112.742 1.218l-.016.034A7.5 7.5 0 1012 4.5 1.5 1.5 0 0110.501 3z" /><path d="M6.728 3.214a1.5 1.5 0 012.058.514l4.5 7.5a1.5 1.5 0 11-2.557 1.57l-.015-.026-4.5-7.5a1.5 1.5 0 01.514-2.058z" /></svg>);
import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M10.23 4.072a4.771 4.771 0 00-6.62.577 5.514 5.514 0 00-1.39 5.408c.855 3.72 5.28 7.895 8.62 10.537a1.859 1.859 0 002.32 0c3.34-2.642 7.765-6.816 8.62-10.537a5.516 5.516 0 00-1.389-5.408 4.77 4.77 0 00-6.62-.577l-1.126.95a1 1 0 01-1.29 0z" /></svg>);
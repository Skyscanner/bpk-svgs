import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.5 4.5a6 6 0 100 12 6 6 0 000-12zm-9 6a9 9 0 1116.336 5.215l4.225 4.224a1.5 1.5 0 01-2.122 2.122l-4.224-4.225A9 9 0 011.5 10.5z" /></svg>);
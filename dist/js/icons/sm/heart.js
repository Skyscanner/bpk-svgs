import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.141 3.41a4.904 4.904 0 00-6.952.626 6.11 6.11 0 00-1.458 5.859c.898 4.03 5.543 8.553 9.051 11.415a1.905 1.905 0 002.436 0c3.508-2.862 8.153-7.384 9.05-11.415a6.106 6.106 0 00-1.457-5.86 4.904 4.904 0 00-6.952-.624l-1.18 1.03a1.025 1.025 0 01-1.357 0l-1.18-1.03z" /></svg>);
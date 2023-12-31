import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2.158a8 8 0 00-8 8v.06a5.522 5.522 0 00.027.605 7.955 7.955 0 001.357 3.833 30.756 30.756 0 005.972 6.94.965.965 0 001.288 0 30.731 30.731 0 005.972-6.94 7.955 7.955 0 001.357-3.833 5.51 5.51 0 00.027-.604v-.061a8 8 0 00-8-8zm0 11a3 3 0 113-3 3 3 0 01-3 3z" /></svg>);
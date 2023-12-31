import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M19.5 5.25h-.801a3.194 3.194 0 01-2.698-1.088l-.404-.574A3.12 3.12 0 0013.05 2.25h-2.29a3.12 3.12 0 00-2.548 1.338l-.718 1.02a1.62 1.62 0 01-1.549.642H4.5a3.273 3.273 0 00-3 3.25v10.25a3.251 3.251 0 003.15 3h14.7a3.251 3.251 0 003.15-3V8.5a3.273 3.273 0 00-3-3.25zM12 18.75a6 6 0 116-6 6 6 0 01-6 6zm3-6a3 3 0 11-3-3 3 3 0 013 3z" /></svg>);
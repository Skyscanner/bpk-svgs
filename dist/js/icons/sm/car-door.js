import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M3 21a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 013 3h11.297a1.5 1.5 0 011.153.54l6.355 7.626a3 3 0 01.695 1.92V19.5A1.5 1.5 0 0121 21H3zM5.25 6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h11.899a.75.75 0 00.576-1.23l-4-4.5a.75.75 0 00-.576-.27H5.25zm0 7.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" /></svg>);
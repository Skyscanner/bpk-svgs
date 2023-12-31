import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M19.5 1.5h-15a3 3 0 00-3 3v15a3 3 0 003 3h15a3 3 0 003-3v-15a3 3 0 00-3-3zm0 11.32a1.5 1.5 0 01-2.14 1.357l-3.867-1.823a3.5 3.5 0 00-2.985 0L6.64 14.177A1.5 1.5 0 014.5 12.82V6A1.5 1.5 0 016 4.5h12A1.5 1.5 0 0119.5 6zM9 7.5A1.5 1.5 0 117.5 6 1.5 1.5 0 019 7.5z" /></svg>);
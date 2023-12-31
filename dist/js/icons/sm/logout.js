import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.5 10.5a1.5 1.5 0 000 3h6.879l-1.94 1.94a1.5 1.5 0 002.122 2.12l4.5-4.5a1.5 1.5 0 000-2.12l-4.5-4.5a1.5 1.5 0 00-2.122 2.12l1.94 1.94H10.5z" /><path d="M9.75 4.5a1.5 1.5 0 000-3H6A4.5 4.5 0 001.5 6v12A4.5 4.5 0 006 22.5h3.75a1.5 1.5 0 000-3H6A1.5 1.5 0 014.5 18V6A1.5 1.5 0 016 4.5h3.75z" /></svg>);
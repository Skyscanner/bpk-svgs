import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M7.5 1.5A1.5 1.5 0 019 0h6a1.5 1.5 0 010 3H9a1.5 1.5 0 01-1.5-1.5zM24 9v6a4.5 4.5 0 01-4.5 4.5H18V21a3 3 0 01-3 3H9a3 3 0 01-3-3v-1.5H4.5A4.5 4.5 0 010 15V9a4.5 4.5 0 014.5-4.5h15A4.5 4.5 0 0124 9zM6 9a1.5 1.5 0 10-1.5 1.5A1.5 1.5 0 006 9zm9 4.5a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 009 13.5v6a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5z" /></svg>);
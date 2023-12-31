import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.5 3a3 3 0 00-3 3 1.5 1.5 0 01-3 0 6 6 0 116 6h-9a1.5 1.5 0 010-3h9a3 3 0 000-6z" /><path d="M13.5 21a1.5 1.5 0 01-1.397-.95 1.5 1.5 0 00-2.79 1.099A4.501 4.501 0 0017.743 18H19.5a4.5 4.5 0 10-4.188-6.148 1.5 1.5 0 002.791 1.099A1.5 1.5 0 1119.5 15h-18a1.5 1.5 0 100 3h12a1.5 1.5 0 010 3z" /></svg>);
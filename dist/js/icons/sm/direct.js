import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M8.25 12a3.75 3.75 0 00-3.75 3.75v3.75a1.5 1.5 0 01-3 0v-3.75A6.75 6.75 0 018.25 9h12a1.5 1.5 0 010 3h-12z" /><path d="M13.94 17.56a1.5 1.5 0 010-2.12l4.939-4.94-4.94-4.94a1.5 1.5 0 012.122-2.12l6 6a1.5 1.5 0 010 2.12l-6 6a1.5 1.5 0 01-2.122 0z" /></svg>);
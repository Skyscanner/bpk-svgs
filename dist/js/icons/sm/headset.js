import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 3.75a7.5 7.5 0 00-7.5 7.5H6a1.5 1.5 0 011.5 1.5v4.5a1.5 1.5 0 01-1.5 1.5H4.5a3 3 0 01-3-3v-4.5a10.5 10.5 0 0121 0v7.5a4.5 4.5 0 01-4.5 4.5h-5.25a1.5 1.5 0 010-3H18a1.5 1.5 0 001.5-1.5H18a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h1.5a7.5 7.5 0 00-7.5-7.5z" /></svg>);
import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm.002 15.001h-.063a.999.999 0 11.063 0zm.993-3.883a1 1 0 01-1.986 0l-.007-.117L11 8l.007-.116a1 1 0 011.986-.001L13 8l.002 5.001z" /></svg>);
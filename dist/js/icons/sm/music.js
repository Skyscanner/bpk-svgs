import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 4.5A7.5 7.5 0 004.5 12v1.5h3A1.5 1.5 0 019 15v6a1.5 1.5 0 01-1.5 1.5h-3a3 3 0 01-3-3V12a10.5 10.5 0 0121 0v7.5a3 3 0 01-3 3h-3A1.5 1.5 0 0115 21v-6a1.5 1.5 0 011.5-1.5h3V12A7.5 7.5 0 0012 4.5z" /></svg>);
import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M22.06 19.963l-6.822-6.823a7.499 7.499 0 10-2.131 2.113l1.272 1.27-1.892 1.892a1.5 1.5 0 002.12 2.122l1.893-1.892.864.864-.458.488a1.5 1.5 0 002.188 2.053l.393-.419.452.453a1.5 1.5 0 002.122-2.121zM9 13.476a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5z" /></svg>);
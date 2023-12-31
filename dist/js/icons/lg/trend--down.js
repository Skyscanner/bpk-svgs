import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M14.001 18.998h6.997a1 1 0 00.993-.883l.007-.116v-7a1 1 0 00-1.994-.117l-.006.117v4.585l-7.293-7.293a1 1 0 00-1.32-.083l-.094.083-2.296 2.292-5.288-5.29a1 1 0 00-1.497 1.32l.083.094 5.994 5.997a1 1 0 001.32.083l.094-.083 2.296-2.292 6.585 6.586h-4.58a1 1 0 00-.994.884l-.007.116a1 1 0 00.883.994z" /></svg>);
import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19.5 18.517v-.056a1.826 1.826 0 00-.793-1.505.913.913 0 01-.059-1.462l1.85-1.502a3.05 3.05 0 001.002-2.415 2.35 2.35 0 00-.908-1.84L16.497 7a9.84 9.84 0 00-4.882-2H3.5a1 1 0 00-1 1v2a1 1 0 001 1h8.997a2.27 2.27 0 011.693 1.063c.302.463-.14.937-.693.937H3.5a1 1 0 00-1 1v3a1 1 0 001 1h6.998a2.141 2.141 0 012 1.989v.51a.5.5 0 00.499.501h6.02a.483.483 0 00.483-.483z" /><path d="M3.5 17a1 1 0 000 2h7a1 1 0 000-2z" /></svg>);
import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17.5 2H6a2.5 2.5 0 00-2.5 2.5V19a3.226 3.226 0 003 3h11a1 1 0 000-2h-11a1 1 0 01-.878-.52C5.49 19.237 5.724 19 6 19h12.5a2.15 2.15 0 002-2V5a3.226 3.226 0 00-3-3zm-4 11h-5a1 1 0 010-2h5a1 1 0 010 2zm2-4h-7a1 1 0 010-2h7a1 1 0 010 2z" /></svg>);
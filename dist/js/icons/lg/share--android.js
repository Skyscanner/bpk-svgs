import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17.248 3.002a2.998 2.998 0 11-1.542 5.57 1.274 1.274 0 00-1.278-.096l-4.113 2.351a1.277 1.277 0 00-.567 1.15v.047a1.274 1.274 0 00.567 1.15l4.114 2.35a1.271 1.271 0 001.277-.096A2.998 2.998 0 1114.25 18v-.024a1.274 1.274 0 00-.567-1.149l-4.113-2.35a1.274 1.274 0 00-1.277.094 2.998 2.998 0 110-5.143 1.272 1.272 0 001.276.096l4.114-2.35a1.277 1.277 0 00.567-1.15V6a2.998 2.998 0 012.998-2.998z" /></svg>);
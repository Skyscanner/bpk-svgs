import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 5.25a2.634 2.634 0 00-1.2.274.679.679 0 00-.3.626v2.262A1.377 1.377 0 0012 9.75a1.377 1.377 0 001.5-1.338V6.15a.685.685 0 00-.304-.62A2.552 2.552 0 0012 5.25z" /><path d="M16.663 8.89a.783.783 0 011.107-.002l.001.001a.79.79 0 010 1.113l-1.759 1.763a5.308 5.308 0 00-1.531 3.32l-.429 2.286a1.5 1.5 0 01-1.495 1.38h-1.113a1.5 1.5 0 01-1.495-1.379l-.43-2.288a5.308 5.308 0 00-1.531-3.319l-1.759-1.763a.785.785 0 011.107-1.114l.001.001 2.314 2.32A3.157 3.157 0 0012 12a3.162 3.162 0 002.35-.79z" /></svg>);
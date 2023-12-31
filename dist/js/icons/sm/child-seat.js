import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M1.527 2.188c-.139-.276.28-.688.697-.688 1.95 0 2.91.688 3.776 3 1.065 2.418 2.015 5.056 2.576 6.693A1.204 1.204 0 009.72 12h6.78a3.226 3.226 0 013 3v1.5A1.613 1.613 0 0118 18H6.3a2.89 2.89 0 01-2.543-2.338L1.527 2.188zM3 19.5a1.5 1.5 0 000 3h18a1.5 1.5 0 000-3z" /></svg>);
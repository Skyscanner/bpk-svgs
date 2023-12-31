import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M15.293 17.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 10-1.438 1.39l.024.024L18.586 11H9.997a1 1 0 000 2h8.59l-3.294 3.293a1 1 0 000 1.414z" /><path d="M9 5a1 1 0 000-2H6a4 4 0 00-4 4v10a4 4 0 004 4h3a1 1 0 000-2H6a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>);
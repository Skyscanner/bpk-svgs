import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.339 6.1l7.561 7.56-5.848 5.85a3.363 3.363 0 01-1.493.866L2.916 22.46a1.12 1.12 0 01-1.376-1.376l2.085-7.643a3.361 3.361 0 01.866-1.492l5.848-5.85zm10.595-3.033a5.347 5.347 0 010 7.56l-1.45 1.449-7.561-7.56 1.45-1.45a5.346 5.346 0 017.56 0z" /></svg>);
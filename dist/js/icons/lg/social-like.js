import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M7.443 11.896V20a1 1 0 001 1h6.035a5 5 0 004.682-3.244l2.27-6.054A2 2 0 0019.557 9h-4.833a1 1 0 01-.97-1.243l.297-1.188A2.873 2.873 0 0011.263 3a.479.479 0 00-.443.296l-3.227 7.838a2 2 0 00-.151.762zm-2 .604a1.5 1.5 0 00-3 0v7a1.5 1.5 0 003 0z" /></svg>);
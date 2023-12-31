import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zm-3 6A1.5 1.5 0 117.5 9 1.5 1.5 0 019 7.5zm6 9H9a1.5 1.5 0 010-3h6a1.5 1.5 0 010 3zm0-6A1.5 1.5 0 1116.5 9a1.5 1.5 0 01-1.5 1.5z" /></svg>);
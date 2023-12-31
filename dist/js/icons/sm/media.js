import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M19.5 2.25h-15a3 3 0 00-3 3v9a3 3 0 003 3h15a3 3 0 003-3v-9a3 3 0 00-3-3zm-4.694 7.864l-3.724 2.578a.389.389 0 01-.582-.37V7.178a.39.39 0 01.582-.37l3.724 2.566a.45.45 0 010 .74zM19.5 20.25a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 010-3h12a1.5 1.5 0 011.5 1.5z" /></svg>);
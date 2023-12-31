import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M4.5 7.5a3 3 0 013-3H12a1.5 1.5 0 000-3H7.5a6 6 0 00-6 6v9a6 6 0 006 6h9a6 6 0 006-6V12a1.5 1.5 0 00-3 0v4.5a3 3 0 01-3 3h-9a3 3 0 01-3-3z" /><path d="M17.56 8.56l-4.939 4.94H15a1.5 1.5 0 010 3H8.996a1.495 1.495 0 01-1.053-.436l-.007-.006A1.496 1.496 0 017.5 15V9a1.5 1.5 0 013 0v2.379l4.94-4.94a1.5 1.5 0 012.12 2.122z" /></svg>);
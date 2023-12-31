import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M22.5 9a1.5 1.5 0 01-3 0V3a1.5 1.5 0 013 0z" /><path d="M22.5 3A1.5 1.5 0 0121 4.5h-6a1.5 1.5 0 010-3h6A1.5 1.5 0 0122.5 3z" /><path d="M12.44 11.56a1.5 1.5 0 010-2.12l7.5-7.5a1.5 1.5 0 012.12 2.12l-7.5 7.5a1.5 1.5 0 01-2.12 0z" /><path d="M7.5 6a3 3 0 00-3 3v7.5a3 3 0 003 3H15a3 3 0 003-3V15a1.5 1.5 0 013 0v1.5a6 6 0 01-6 6H7.5a6 6 0 01-6-6V9a6 6 0 016-6H9a1.5 1.5 0 010 3z" /></svg>);
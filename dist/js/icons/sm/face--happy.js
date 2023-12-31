import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zm-3 6A1.5 1.5 0 117.5 9 1.5 1.5 0 019 7.5zm7.061 8.56l-.04.04a5.205 5.205 0 01-8.042 0l-.039-.04a1.5 1.5 0 012.12-2.12c.735.734 1.1 1.06 1.94 1.06.841 0 1.205-.327 1.939-1.06a1.5 1.5 0 012.122 2.12zM15 10.5A1.5 1.5 0 1116.5 9a1.5 1.5 0 01-1.5 1.5z" /></svg>);
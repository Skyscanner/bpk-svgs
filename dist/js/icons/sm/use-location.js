import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M3.113 8.295l17.692-6.71a1.248 1.248 0 011.61 1.61l-6.71 17.692a2.498 2.498 0 01-4.57.232l-2.126-4.25a4.2 4.2 0 00-1.878-1.878l-4.25-2.125a2.499 2.499 0 01.232-4.571z" /></svg>);
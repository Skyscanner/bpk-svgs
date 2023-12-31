import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 5a7.003 7.003 0 00-6.492 4.376 1 1 0 11-1.876-.693q.01-.029.023-.057A9.003 9.003 0 0119 6.344V4a1 1 0 012 0v5a1 1 0 01-1 1h-5a1 1 0 010-2h2.746A6.993 6.993 0 0012 5zM6.254 16H9a1 1 0 000-2H4a1 1 0 00-1 1v5a1 1 0 002 0v-2.342a9.002 9.002 0 0015.345-2.282 1 1 0 10-1.83-.808l-.023.058A7.003 7.003 0 016.254 16z" /></svg>);
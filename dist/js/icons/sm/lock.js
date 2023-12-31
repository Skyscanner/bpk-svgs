import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M20.316 10.647L18.325 10A19.986 19.986 0 0018 9.898V7.5a6 6 0 00-12 0v2.398c-.108.032-.217.067-.325.102l-1.991.647a.977.977 0 00-.684.924V19.5a3 3 0 003 3h12a3 3 0 003-3v-7.929a.977.977 0 00-.684-.924zM13.5 16.5a1.5 1.5 0 01-3 0V15a1.5 1.5 0 013 0zM15 9.221a20.518 20.518 0 00-6 0V7.5a3 3 0 016 0z" /></svg>);
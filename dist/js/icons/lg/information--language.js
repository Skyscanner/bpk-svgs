import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M21.247 3.916l-2.215-.758a21.686 21.686 0 00-14.063 0l-2.215.758A1.14 1.14 0 001.994 5v10.597a3.38 3.38 0 003.336 3.425h2.49a2 2 0 011.434.605l2.03 2.085a1 1 0 001.414.019l.018-.019 2.03-2.085a2 2 0 011.433-.605h2.491a3.38 3.38 0 003.336-3.425V5a1.14 1.14 0 00-.76-1.083zm-4.753 12.07a8.302 8.302 0 01-4.424-1.269 7.342 7.342 0 01-4.076 1.27 1 1 0 010-2 5.224 5.224 0 002.414-.608l-.075-.077A8.474 8.474 0 018.08 8.986h-.086a1 1 0 010-2h3v-1a1 1 0 012 0v1h3a1 1 0 010 2h-.087a8.736 8.736 0 01-2.173 4.297l-.045.05a6.293 6.293 0 002.805.653 1 1 0 010 2zm-2.626-7a6.905 6.905 0 01-1.614 2.952q-.109.12-.222.234-.13-.123-.252-.252a6.626 6.626 0 01-1.66-2.934z" /></svg>);
import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M22 7.382a1.935 1.935 0 00-.514.068.647.647 0 01-.747-.279 2.722 2.722 0 00-.057-.103l-1.53-2.75a3.986 3.986 0 00-3.473-2.068H8.321a3.985 3.985 0 00-3.473 2.068l-1.53 2.75q-.03.05-.057.103a.647.647 0 01-.747.279A1.935 1.935 0 002 7.382a2.026 2.026 0 00-2 2.052c0 .958.14 1.566 1.005 1.792a.626.626 0 01.495.577v8.447a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 001.5-1.5v-1.5h12v1.5a1.5 1.5 0 001.5 1.5H21a1.5 1.5 0 001.5-1.5v-8.447a.626.626 0 01.495-.577C23.86 11 24 10.393 24 9.434a2.026 2.026 0 00-2-2.052zM6 10.5v-3a.75.75 0 011.5 0v1.045a5.251 5.251 0 019.047.079.75.75 0 01-1.298.752 3.752 3.752 0 00-6.687.374H9.75a.75.75 0 010 1.5h-3A.75.75 0 016 10.5zM18 15a.75.75 0 01-1.5 0v-1.045a5.251 5.251 0 01-9.047-.079.75.75 0 011.298-.752 3.751 3.751 0 006.687-.374H14.25a.75.75 0 010-1.5h3A.75.75 0 0118 12z" /></svg>);
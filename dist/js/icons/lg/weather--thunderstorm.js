import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M14.045 4.023a.294.294 0 00.262-.49A5.502 5.502 0 005.177 6.1a1.432 1.432 0 01-1.065 1.003 3.997 3.997 0 00-1.494 7.114.244.244 0 00.378-.217 5.002 5.002 0 013.83-4.862.562.562 0 00.41-.393 6.503 6.503 0 016.81-4.722z" /><path d="M18.496 18a4.5 4.5 0 00.996-8.89 1.337 1.337 0 01-.935-.768 5.501 5.501 0 00-10.38.758 1.432 1.432 0 01-1.065 1.003A3.998 3.998 0 007.996 18h.45a.736.736 0 00.622-.554 1.196 1.196 0 01.072-.165l3.517-6.634a1.212 1.212 0 012.284.577v2.495a.2.2 0 00.2.2h1.641a1.223 1.223 0 011.07 1.8l-.82 1.547a.5.5 0 00.442.734z" /><path d="M13.451 21.885a.212.212 0 01-.4-.11v-3.47a.219.219 0 00-.213-.224H10.21a.223.223 0 01-.187-.331l3.518-6.635a.212.212 0 01.4.109v3.47a.219.219 0 00.213.225h2.628a.223.223 0 01.187.33z" /></svg>);
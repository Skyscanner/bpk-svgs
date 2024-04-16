import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M4 6v2a1 1 0 01-2 0V6a4 4 0 014-4h2a1 1 0 010 2H6a2 2 0 00-2 2zm12-4h2a4 4 0 014 4v2a1 1 0 11-2 0V6a2 2 0 00-2-2h-2a1 1 0 110-2zM4 16v2a2 2 0 002 2h2a1 1 0 110 2H6a4 4 0 01-4-4v-2a1 1 0 112 0zm18 0v2a4 4 0 01-4 4h-2a1 1 0 110-2h2a2 2 0 002-2v-2a1 1 0 112 0zM7 8a1 1 0 012 0v2a1 1 0 11-2 0V8zm8 0a1 1 0 112 0v2a1 1 0 11-2 0V8zm.555 8.866c-3.028 1.966-5.762.986-7.15-.028-.412-.3-.529-.92-.261-1.383.267-.463.817-.594 1.23-.293.981.717 2.987 1.469 5.293-.028.425-.276.968-.112 1.214.366.245.478.1 1.09-.326 1.366zM12 8.5a1 1 0 011 1v2.172a3 3 0 01-.879 2.12l-.414.415a1 1 0 01-1.414-1.414l.414-.414a1 1 0 00.293-.707V9.5a1 1 0 011-1z" /></svg>);
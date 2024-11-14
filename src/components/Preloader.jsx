import React from "react";
import "./preloader.css";
function Preloader() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen preloader-scope">
      <div class="preloader">
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
      </div>
      <div class="status text-2xl font-semibold">
        Loading<span class="status__dot">.</span>
        <span class="status__dot">.</span>
        <span class="status__dot">.</span>
      </div>
    </main>
  );
}

export default Preloader;

import { useState, useEffect, useRef } from "react";

export default function OffCanvas({children}) {

  return (
    <>
      <div className="UI__off-canvas">
       {children}
      </div>
    </>
  );
}


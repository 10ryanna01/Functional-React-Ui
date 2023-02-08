import { useState } from "react";
export default function FAQ() {
  const [searchValue] = useState("new");
  return (
    <>
      <h1 className="UI__static__page__title">three questions for an AI</h1>

      <div className="UI__static__page"></div>
    </>
  );
}

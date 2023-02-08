import { useState } from "react";
export default function FAQ() {
  const [searchValue] = useState("new");
  return (
    <>
      <h1 className="UI__static__page__title">FAQ from A Chat Bot</h1>

      <div className="UI__static__page"></div>
    </>
  );
}

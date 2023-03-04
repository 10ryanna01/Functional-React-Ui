import { useState } from "react";
import ParalaxTemplate from "../components/ParalaxTemplate";
export default function FAQ() {
  const [searchValue] = useState("new");
  return (
    <>
      <h1 className="UI__static__page__title">FAQ from A Chat Bot</h1>

      <div className="UI__static__page">

<ParalaxTemplate />

      </div>
    </>
  );
}

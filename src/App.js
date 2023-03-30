import React from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Explore from "./pages/Explore";
import FAQ from "./pages/Faq";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="New" element={<New />} />
      <Route path="Explore" element={<Explore />} />
      <Route path="Faq" element={<FAQ />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

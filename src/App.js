 
import "./styles/styles.scss";
import Header from "./components/Header";  
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider  router={router} />
    </>
  );
}

export default App;

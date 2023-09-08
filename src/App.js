import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import Products from './assets/main/Products';
import Navbar from './assets/components/Navbar';
import Home from './assets/main/Home';
import AOS from "aos";
import "aos/dist/aos.css";

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/', element: <Products />}
]);

function App() {
  AOS.init();

  return (
    <>
     <Navbar />
     <RouterProvider router={router} />
    </>
  );
}

export default App;

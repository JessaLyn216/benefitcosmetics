import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import Products from './assets/main/Products';
import RootLayout from './assets/main/Root';
import Home from './assets/main/Home';
import AOS from "aos";
import "aos/dist/aos.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> }
    ]
  }
]);

function App() {
  AOS.init();

  return <RouterProvider router={router} />;
}

export default App;

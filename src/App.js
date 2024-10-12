import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/home';
import CounterPage from './pages/counter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/counter', element: <CounterPage />}
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

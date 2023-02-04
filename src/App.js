
import './App.css';
import { routes } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

function App() {
  const router = routes
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;

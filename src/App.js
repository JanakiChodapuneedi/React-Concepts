
import './App.css';
import Header from './components/Header';
import Fotter from './components/Fotter';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import NewTab from './components/NewTab';

function App() {

  const browserRouter = createBrowserRouter([
    {
      path : "/",
      element: <Body/>,
      children : [{
        path :'/',
        element:<MainContainer/>
      },{
        path:"newTab",
      element:<NewTab/>
      }]
      
    }
  ]);
  

  return (
    <div className="App">
      <Header/>
      <RouterProvider router={browserRouter}>
      <Body/>
      </RouterProvider>
      <Fotter/>
    </div>
  );
}

export default App;

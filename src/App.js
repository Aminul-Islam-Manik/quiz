import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
// import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {path:'/', 
    element:<Layout></Layout>,
    children:[
      // {path:'/', element:<Home></Home>},
      {path:'/', 
      loader:async ()=>{return fetch('https://openapi.programming-hero.com/api/quiz')},
      element:<Topics></Topics>},
      {path:'/topic/:topicId',
      loader: async({params}) =>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
      },
      element:<Quiz></Quiz>,
      },
      {path:'statistics', 
      loader:async ()=>{return fetch('https://openapi.programming-hero.com/api/quiz')},
      element:<Statistics></Statistics>},
      {path:'blog', element:<Blog></Blog>}
    ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

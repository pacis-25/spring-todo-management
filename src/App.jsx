import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ROUTE } from './constant/routes'
import ListTodoComponent from './components/ListTodoComponent'
import TodoComponent from './components/TodoComponent'
import { isUserLoggedIn } from './hooks/useLoggedInAuth'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
import { Navigate } from 'react-router-dom'


function App() {
  const isAuth = isUserLoggedIn();

  const authenticatedRoutes = [
    {path: ROUTE.TODO, element: <ListTodoComponent/>},
    {path: ROUTE.ADD_NEW_TODO, element: <TodoComponent/>},
    {path: ROUTE.UPDATE_TODO, element: <TodoComponent/>},
  ];

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<LoginComponent />}></Route>
          <Route path={ROUTE.REGISTER} element={<RegisterComponent />}></Route>
          <Route path={ROUTE.LOGIN} element={<LoginComponent />}></Route>
            {authenticatedRoutes.map(route => (
              <Route key={route.path} path={route.path} element={isAuth ? route.element: <Navigate to={ROUTE.LOGIN}/>}/>
            ))}
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App

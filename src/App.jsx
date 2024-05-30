import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ROUTE } from './constant/routes'
import ListTodoComponent from './components/ListTodoComponent'
import TodoComponent from './components/TodoComponent'
import { isUserLoggedIn } from './services/AuthService'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'


function App() {

  function AuthenticatedRoute({children}){

    const isAuth = isUserLoggedIn();

    if(isAuth) {
      return children;
    }

    return <Navigate to="/" />

  }

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
          <Route path='/' element={<LoginComponent/>}></Route>
          <Route path={ROUTE.TODO} element={<AuthenticatedRoute><ListTodoComponent/></AuthenticatedRoute>}></Route>
          <Route path={ROUTE.ADD_NEW_TODO} element={<AuthenticatedRoute><TodoComponent /></AuthenticatedRoute>}></Route>
          <Route path={ROUTE.UPDATE_TODO} element={<AuthenticatedRoute><TodoComponent /></AuthenticatedRoute>}></Route>
          <Route path='/register' element = { <RegisterComponent />}></Route>
          <Route path='/login' element = { <LoginComponent /> }></Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Categories from "./Pages/Categories";
import Login from './components/Login';
import Register from './components/Register';
import Success from './components/Success';
import Posts from './Pages/Posts'
import PostPage from './Pages/PostPage'
import OtherProfile from './Pages/OtherProfile';
import AddCategory from './components/AddCategory';
import AfterLogin from './Pages/AfterLogin';
import AdminPage from './components/AdminPage';
import Posting from './Pages/Posting';
import UpdatePost from './Pages/UpdatePost';


 
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={AfterLogin} />
          <Route path="/admin" Component={AdminPage} />
          <Route path="/profile/:id" Component={Profile} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/Success" Component={Success} />
          <Route path="/Posts" Component={Posts} />
          <Route path="/PostPage/:id" Component={PostPage} />
          <Route path="/Post" Component={PostPage} />
          <Route path="/OtherProfile" Component={OtherProfile} />
          <Route path="/categories" Component={Categories} />
          <Route path="/new-category" Component={AddCategory} />
          <Route path="/Posting" Component={Posting} />
          <Route path='/updatePost/:id' element= {<UpdatePost />} ></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Friends from './Component/Friends/Friends';
import About from './Component/About/About';
import Error404 from './Component/Error404/Error404';
import Header from './Component/Header/Header';
import FriendDetails from './Component/FriendDetails/FriendDetails';
import Posts from './Component/Posts/Posts';
import PostDetail from './Component/PostDetail/PostDetail';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/friends" element={<Friends/>}></Route>
        <Route path="/friend/:friendId" element={<FriendDetails></FriendDetails>}></Route>
        {/* Nested Route */}
        <Route path="/posts" element={<Posts></Posts>}>
            <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="/about" element={<About/>}></Route>
        {/* eita sob nice takte hobe eita 404 page design link */}
        <Route path="*" element={<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

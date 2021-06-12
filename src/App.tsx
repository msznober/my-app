import { FC, useEffect, useState, createContext } from 'react';
import TopBar from './components/elements/TopBar/TopBar';
import LeftSidebar from './components/elements/LeftSidebar/LeftSidebar';
import HomeMain from './components/elements/HomeMain/HomeMain';
import './App.css';
import axios from 'axios';

export const CurrentUserContext = createContext({});
export const UsersDataContext = createContext({});
export const PostsContext = createContext({});
export const ResumeWorkContext = createContext({});

function App() {

  const [users, setUsers] = useState<Object>({});
  const [photos, setPhotos] = useState<Object>({});
  const [posts, setPosts] = useState<Object>({});
  const [comments, setComments] = useState<Object>({});

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = response.data;
      setUsers(data);
    } catch (error) {
      console.log("Wystąpił błąd");
    }
  };

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      const data = response.data;
      setPhotos(data);
    } catch (error) {
      console.log("Wystąpił błąd");
    }
  };

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log("Wystąpił błąd");
    }
  };

  const getComments = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const data = response.data;
      setComments(data);
    } catch (error) {
      console.log("Wystąpił błąd");
    }
  };

  useEffect(() => {
    getUsers();
    getPhotos();
    getPosts();
    getComments();
  }, []);

  const currentUser: object = {
    ...users[0],
    ...photos[0],
  };

  const usersData: object = {
    users,
    photos,
  }

  const postsData: object = {
    users,
    photos,
    posts,
  };

  const resumeWork: object = {
    users,
    photos,
    comments,
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <UsersDataContext.Provider value={usersData}>
        <PostsContext.Provider value={postsData}>
          <ResumeWorkContext.Provider value={resumeWork}>
            <TopBar />
            <LeftSidebar />
            {Object.keys(posts).length !== 0 &&
              Object.keys(photos).length !== 0 &&
              Object.keys(users).length !== 0 &&
              Object.keys(comments).length !== 0 &&
              <HomeMain />}
          </ResumeWorkContext.Provider>
        </PostsContext.Provider>
      </UsersDataContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;

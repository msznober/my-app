import { FC, useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from './components/elements/TopBar/TopBar';
import LeftSidebar from './components/elements/LeftSidebar/LeftSidebar';
import HomeMain from './components/elements/HomeMain/HomeMain';
import './App.css';
import axios from 'axios';
import TestPage from './components/elements/TestPage/TestPage';
import EntitiesPage from './components/elements/EntitiesPage/EntitiesPage';
import EntitiesPageList from './components/elements/EntitiesPage/EntitiesPageList';
import WorkspacesPage from './components/elements/WorkspacesPage/WorkspacesPage';
import ProfilePage from './components/elements/ProfilePage/ProfilePage';

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
            <Router>
              <TopBar />
              <LeftSidebar />
              <Switch>
                <Route exact path='/'>
                  {Object.keys(posts).length !== 0 &&
                    Object.keys(photos).length !== 0 &&
                    Object.keys(users).length !== 0 &&
                    Object.keys(comments).length !== 0 &&
                    <HomeMain />}
                </Route>
                <Route path='/testpage'>
                  <TestPage />
                </Route>
                <Route path='/entitiespage'>
                  {Object.keys(photos).length !== 0 &&
                    Object.keys(users).length !== 0 &&
                    <EntitiesPage />}
                </Route>
                <Route path='/entitiespagelist'>
                  {Object.keys(photos).length !== 0 &&
                    Object.keys(users).length !== 0 &&
                    <EntitiesPageList />}
                </Route>
                <Route path='/profilepage'>
                  <ProfilePage />
                </Route>
                <Route path='/workspacespage'>
                  <WorkspacesPage />
                </Route>
              </Switch>
            </Router>
          </ResumeWorkContext.Provider>
        </PostsContext.Provider>
      </UsersDataContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;

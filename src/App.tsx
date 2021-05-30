import { FC } from 'react';
import TopBar from './components/elements/TopBar/TopBar';
import LeftSidebar from './components/elements/LeftSidebar/LeftSidebar';
import HomeMain from './components/elements/HomeMain/HomeMain';
import './App.css';

function App() {
  return (
    <>
      <TopBar />
      <LeftSidebar />
      <HomeMain />

    </>
  );
}

export default App;

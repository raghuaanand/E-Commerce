import { useState } from 'react';
import './App.css';
import TopHeader from './components/homepage/TopHeader';
import Header from './components/homepage/Header';
import LeftSideBar from './components/homepage/LeftSideBar';
import SlidingSection from './components/homepage/SlidingSection';

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <TopHeader/>
      <Header/>

      <div className='ml-[8rem]'>
        <div className='flex'>
          <LeftSideBar/>
          <SlidingSection/>
        </div>
      </div>
    </>
  )
}

export default App

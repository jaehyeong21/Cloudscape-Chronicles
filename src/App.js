import './App.css';
import { useEffect } from 'react';
import { veryShortData } from './api/weather';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await veryShortData();
        console.log(data); // 데이터를 콘솔에 출력합니다.
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}

export default App;

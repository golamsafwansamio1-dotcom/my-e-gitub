import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import Navigation from './component/Navegation';
import Header from './component/Header';
import Mainlayout from './component/Mainlayout';
import { Suspense } from 'react';
import Loading from './component/Loading ';
import Footer from './component/Footer';


const dataPromise = async () => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}


function App() {


  return (
   <div>
   <Navigation />
   <Header/>
   <Suspense fallback={<Loading/>}>
    <Mainlayout datapromise={dataPromise()}/>
    </Suspense>
    <Footer/>
      <Toaster/>
   </div>
  )
}

export default App

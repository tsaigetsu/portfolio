import React, { useEffect } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import useScrollGradient from "./hooks/useScrollGradient";
import Footer from "./components/Footer";

function App() {
  useScrollGradient();

  // useEffect(() => {
  //   if (window.history.scrollRestoration) {
  //     window.history.scrollRestoration = 'manual';
  //   }

  //   const timer = setTimeout(() => {
  //     window.scrollTo(0, 0); 
      
  //     const initialSection = document.getElementById('initial-section');
      
  //     if (initialSection) {
  //       initialSection.scrollIntoView({
  //         behavior: 'auto',
  //         block: 'start'
  //       });
  //     }
  //   }, 10);

  //   return () => {
  //     clearTimeout(timer);
  //     if (window.history.scrollRestoration) {
  //       window.history.scrollRestoration = 'auto';
  //     }
  //   };
  // }, []);

  return (
    <>
      <Header></Header>
      <Main></Main> 
      <Footer></Footer>
    </>
  );
}

export default App;
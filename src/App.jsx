import Header from "./components/Header";
import Main from "./components/Main";
import useScrollGradient from "./hooks/useScrollGradient";
import Footer from "./components/Footer";

function App() {
  useScrollGradient();
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;

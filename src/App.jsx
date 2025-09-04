import Header from "./components/Header";
import Main from "./components/Main";
import useScrollGradient from "./hooks/useScrollGradient";

function App() {
  useScrollGradient();
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;

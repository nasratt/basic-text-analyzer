import './App.scss';
import BottomResultBox from './components/BottomResultBox';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ResultBox from './components/ResultBox';
import TextArea from './components/TextArea';
import { ContextProvider } from './context/Context';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ContextProvider>
            <ResultBox />
            <TextArea />
            <BottomResultBox />
          </ContextProvider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;

import './App.css';
import Header from './components/header.jsx'
import MainContainer from './components/mainContainer.jsx'
import Galery from './components/galery.jsx';

function App() {
  return (
    <div className='w-full flex flex-col gap-14'>
      <Header></Header>
      <MainContainer></MainContainer>
      <Galery></Galery>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/header.jsx";
import MainContainer from "./components/mainContainer.jsx";
import Galery from "./components/galery.jsx";
import ClothingSection from "./components/clothingSection.jsx";
function App() {
  return (
    <div className="w-full flex flex-col gap-14">
      <Header></Header>
      <MainContainer></MainContainer>
      <Galery></Galery>
      <div>
        <h1 className="text-orange-500 text-3xl mb-5" id="men">
          Men
        </h1>
        <ClothingSection gender="men"></ClothingSection>
      </div>
      <div>
        <h1 className="text-orange-500 text-3xl mb-5" id="woman">
          Woman
        </h1>
        <ClothingSection gender="woman"></ClothingSection>
      </div>
      <div>
        <h1 className="text-orange-500 text-3xl mb-5" id="kid">
          Kid
        </h1>
        <ClothingSection gender="kid"></ClothingSection>
      </div>
    </div>
  );
}

export default App;

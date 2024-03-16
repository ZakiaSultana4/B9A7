import Banner from "./Components/Banner";
import Home from "./Components/Home";
import Navber from "./Components/Navber";


function App() {
  return (
    <div className=" max-w-screen-2xl mx-auto md:px-16 px-7">
  <Navber/>
  <Banner/>
  <Home/>
    </div>
  );
}

export default App;

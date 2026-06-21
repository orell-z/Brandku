import Header from "./component/header";
import CardGrid from "./component/CardGrid";
import { featureData } from "./data/feature";
import { useState } from "react";
import Beranda from "./pages/beranda";

const App = () => {
  const [feature] = useState (featureData);

  return (
    <>
    <Header/>
    <Beranda>
      <div className="pt-7 flex justify-center">
        <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-md">
          mulai gratis
        </button>
      </div>
    </Beranda>
    <CardGrid feature={feature} />
    <footer className="bg-gray-900 text-gray-400 text-center py-8 px-8 text-sm">
      <p>&copy; 2026 brandku. ALL right reserved.</p>
    </footer>
    </>
  );
};

export default App;
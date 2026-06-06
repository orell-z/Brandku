import CtaButton from "./component/CTabutton";
import Header from "./component/header";
import Beranda from "./pages/beranda";
const App = () => {
  return (
    <>
    <Header/>
    <Beranda/>
    <footer className="bg-gray-900 text-gray-400 text-center py-8 px-8 text-sm">
      <p>&copy; 2026 brandku. ALL right reserved.</p>
    </footer>
    </>
  );
};

export default App;

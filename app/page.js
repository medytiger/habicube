import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ConnexionModal from "./components/modals/ConnexionModal";
import ClientMenu from "./components/ClientMenu/ClientMenu";
import Caroussel from "./components/Caroussel/Caroussel";
import AddProductModal from "./components/modals/AddProductModal";
import HomeMain from "./components/HomeMain/HomeMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div className="container">
      <ToastContainer position="top-center" autoClose={5000} />
      <Navbar />
      <Caroussel />
      <ClientMenu />
      <RegisterModal />
      <ConnexionModal />
      <AddProductModal />

      <main>
        <HomeMain />
      </main>
    </div>
  );
}

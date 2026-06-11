import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import FloatingMenu from "./components/FloatingMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#F2F2F2] min-h-screen overflow-x-hidden">

      <Navbar />

      <main className="pt-[90px] md:pt-[90px]">
        <Hero />
        <ProductSection />
        <FloatingMenu />
        <Footer />
      </main>

    </div>
  );
}

export default App;
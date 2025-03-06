import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/enquiries" element={<Enquiries />} />
        <Route path="/whatsapp" element={<WhatsApp />} />
      </Routes>
      <Footer />
    </div>
  );
}

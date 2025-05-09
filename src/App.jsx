import Companies from "./Component/Companies";
import Faq from "./Component/Faq";
import Footer from "./Component/Footer";
import Header from "./Component/header";
import Hero from "./Component/Hero";
import Pricing from "./Component/pricing";
import Service1 from "./Component/Service1";
import Service2 from "./Component/Service2";
import Testimonial from "./Component/Testimonial";
import Trial from "./Component/Trial";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Service1 />
      <Service2 />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer />
    </>
  );
}

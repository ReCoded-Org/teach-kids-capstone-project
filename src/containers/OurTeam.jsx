import OurFrontendTeam from "../components/OurFrontendTeam/OurFrontendTeam";
import OurBackendTeam from "../components/OurBackendTeam/OurBackendTeam";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

function OurTeam() {
  return (
    <>
        <Navbar />
        <BackToTopButton />
        <OurFrontendTeam className="z-0" />
        <OurBackendTeam />
        <Footer />
    </>
);

}

export default OurTeam;
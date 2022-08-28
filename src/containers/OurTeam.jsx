import OurFrontendTeam from "../components/OurFrontendTeam/OurFrontendTeam";
import OurBackendTeam from "../components/OurBackendTeam/OurBackendTeam";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

function OurTeam() {
  return (
    <>
        <Navbar />
        <OurFrontendTeam className="z-0" />
        <OurBackendTeam />
        <Footer />
    </>
);

}

export default OurTeam;
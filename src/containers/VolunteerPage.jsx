import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
// import Carousel from "../components/GlobalCarousel/Events/Events";
import VolunteerProfile from "../components/VolunteerProfile/VolunteerProfile";
import React from "react";

import { getEvents } from "../services/events.js";
import { useQuery } from "@tanstack/react-query";

export default function VolunteerPage () {
  const { isLoading, error, data } = useQuery(["events"], () => getEvents());

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <Navbar />
      <VolunteerProfile />
      {/* <Carousel /> */}
      <Footer />
    </>
  )
}
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import VolunteerProfile from "../components/VolunteerProfile/VolunteerProfile";
import React from "react";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

import { useQuery } from "@tanstack/react-query";

import Events from '../components/GlobalCarousel/Events/Events'


export default function VolunteerPage ({userId}) {
  const { isLoading, error, data } = useQuery(["events"], () => fetch(`https://reach-capstone.herokuapp.com/api/events`).then((res) => res.json()));

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  
  return (
    <>
      <Navbar />
      <BackToTopButton />
      <VolunteerProfile userId={userId} />
      <Events  carouselHeader={'Applied Events'} events={data.data} />
      <Footer />
    </>
  )
}
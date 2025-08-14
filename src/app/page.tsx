// components

// sections

import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import Hero from "./hero";
import Testimonial from "./testimonial";


export default function Portfolio() {
  return (
    <>
      <Hero/>
      <Skills />
      <Projects />
      <Resume />
      <Testimonial/>
       <ContactForm />
    </>
  );
}

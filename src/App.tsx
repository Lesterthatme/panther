import "./App.css";
import images from "../public/images/hero-doctor.png";
import Header from "./components/layout/Header";
import Mission from "./components/sections/Mission";
import PeopleBehind from "./components/sections/PeopleBehind";
import Team from "./components/sections/Team";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header tagline="Simplifying Medicare, Maximizing Coverage." />
      <Mission
        eyebrow="Our Purpose"
        heading="Our Mission"
        body="We guide nursing home residents through Medicare options
and enroll them in the plans best suited to their needs. This
reduces the workload on your staff who normally assist your
residents with Medicare enrollment, while also supporting
your billing department by aligning residents with plans that
simplify payments and optimize reimbursement. With yearround service, we ensure residents receive continuous
coverage and your facility remains financially protected."
        imageSrc={images}
      />
      <PeopleBehind
        eyebrow="Who We Are"
        heading="The People Behind Panther"
        body="At Panther, our team is dedicated to helping healthcare facilities, residents, and families
navigate Medicare with confidence. We combine industry expertise, personalized support,
and a commitment to exceptional service to ensure every resident receives the coverage
they need while helping facilities improve efficiency and financial performance."
        imageSrc="../public/images/team-hands.png"
      />
      <Team />
      <Footer
        logoText="Panther"
        aboutText="Simplifying Medicare enrollment and coverage
management while supporting residents, families,
and healthcare providers every step of the way"
        heading="Website Coming Soon"
        body="Panther is preparing to launch our new website. Stay tuned for updates
and more information about our services and solutions."
        bottomText="© 2026 Panther. All rights reserved."
      />
    </>
  );
}

export default App;

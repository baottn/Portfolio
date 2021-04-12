import React, { Fragment } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';
import projects from "./components/ProjectData";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <About />
      <ProjectList projects={projects} />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;

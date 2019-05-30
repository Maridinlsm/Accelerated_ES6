import React, { Component } from "react";
// import "./App.css";
import WeatherApp from "./WeatherApp";
// import * as Section2 from './Sections/section2'; // Syntax Changes & Additions
// import * as Section3 from './Sections/section3'; // Modules & Classes
// import * as Section4 from './Sections/section4'; // Symbols
// import * as Section5 from './Sections/section5'; // Iterators & Generators
// import * as Section6 from './Sections/section6'; //Promises
// import * as Section7 from './Sections/section7'; //Object
// import * as Section7A from './Sections/section7Array'; //Array
// import * as Section8 from './Sections/section8'; // Maps & Sets
// import * as Section9 from './Sections/Section9'; // Reflect API
// import * as SectionA from './Sections/sectionA'; // Proxy

class App extends Component {
  render() {
    // SectionA.revokeProxy();
    return (
      <section>
        <WeatherApp />
      </section>
    );
  }
}

export default App;

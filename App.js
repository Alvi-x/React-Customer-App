import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Listing from "./Listing";
import Details from "./Details";
import Newdetails from "./Newdetails";
import Address from "./Address";
import Comments from "./Comments";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";

function App() {

  const [list, setList] = useState([
    {
      id: 1,
      firstName: 'Bongani',
      lastName: 'Melembe',
      cellPhone: '012 468 0975',
      physicalAddress: '123 Foo street',
      postalAddress: '456 Foo street',
      commentArea: "I'm growing my front-end skills",
  },
    {
      id: 2,
      firstName: 'Jessica',
      lastName: 'Mexwell',
      cellPhone: '012 543 0762',
      physicalAddress: '789 Foo street',
      postalAddress: '012 Foo street',
      commentArea: "I'm growing my front-end skills",
  },
    {
      id: 3,
      firstName: 'Dumisani',
      lastName: 'Melody',
      cellPhone: '012 138 5648',
      physicalAddress: '468 Foo street',
      postalAddress: '913 Foo street',
      commentArea: "I'm growing my front-end skills",
  }
  ]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={list.length > 0 ? <Listing Listing firstName="Bongani" lastName = "Melembe" cellPhone = "012 468 0975" /> : 'No Tasks to show'} />
          <Route path="/details" element={<Details Listing firstName="Bongani" lastName = "Melembe" cellPhone = "012 468 0975" physicalAddress= "123 Foo street" postalAddress="456 Abc street" commentArea="I'm growing my front-end skills" />} />
          <Route path="/newdetails" element={<Newdetails />} />
          <Route path="/address" element={<Address />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

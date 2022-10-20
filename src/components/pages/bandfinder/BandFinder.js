import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bands from "./Bands";
import SingleBand from "./SingleBand";

// import whiskey from "../../../images/whiskey.jpg";
// import hazel from "../../../images/hazel.jpg";
// import tubby from "../../../images/tubby.jpg";
import { useState } from "react";

const bands = [
  {
    name: "vocals",
    id: 0,
    image:
      "https://images.pexels.com/photos/8133326/pexels-photo-8133326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "guitar",
    id: 1,

    image:
      "https://images.pexels.com/photos/164835/pexels-photo-164835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "bass",
    id: 2,

    image:
      "https://images.pexels.com/photos/164907/pexels-photo-164907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "drums",
    id: 2,

    image:
      "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
function BandFinder() {
  const [imgArr, setImgArr] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/bands"
          element={<Bands bands={bands} imgArr={imgArr} />}
        />
        <Route path="/" element={<Bands bands={bands} imgArr={imgArr} />} />
        <Route path="/bands/:name" element={<SingleBand bands={bands} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default BandFinder;

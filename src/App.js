import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft, FiChevronsRight } from "react-icons/fi";

import data from "./data";
import Title from "./title";
import Slider from "./slider";
console.log(Title);
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='section'>
      <Title />
      <div className='section-center'>
        <Slider people={people} index={index} setIndex={setIndex} />

        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronsRight />
        </button>
      </div>
      ;
    </section>
  );
}

export default App;

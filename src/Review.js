import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  const nextPerson = () => {
    if (index === people.length - 1) {
      setIndex(0);
    }
    else {
      setIndex(index + 1);
    }

  }

  const prevPerson = () => {
    if (index === (people.length - people.length)) {
      setIndex(people.length - 1);
    }
    else {
      setIndex(index - 1);
    }

  }
  const ranomPerson = () => {
    const rnd = Math.floor(Math.random() * 4);
    setIndex(rnd);
  }



  return (
    <>
      <section className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} />
        </div>

        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div>
          <button onClick={prevPerson} className='prev-btn'><FaChevronLeft /></button>
          <button onClick={nextPerson} className='next-btn'><FaChevronRight /></button>
        </div>

        <button onClick={ranomPerson} className='random-btn'>Suprise Me</button>

      </section>
    </>
  )
};

export default Review;

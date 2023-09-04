import React from 'react';
import about from '../Assets/About.jpg';


function About() {
  return (
    <>

      <section className="m-2 p-1 text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About BookHub</h1>
            <p className="mb-8 leading-relaxed">An idea occurs when you develop a new combination of old elements. 
            The capacity to bring old elements into new combinations depends largely on your ability to see relationships. 
            All ideas follow a five-step process of :<br></br>1) gathering material,
             <br></br>2) intensely working over the material in your mind,<br></br> 
             3) stepping away from the problem,<br></br> 4) allowing the idea to come back to you naturally, and 
             <br></br>5) testing your idea in the real world and adjusting it based on feedback.
            </p>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img classNameNameName='w-full max-h-[690px] object-cover' src={about} alt="About" srcset="" />

          </div>
        </div>
      </section>

    </>
  )
}

export default About;
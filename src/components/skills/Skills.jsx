import React from "react";

const Skills = () => {
  return (
    <div id="skills" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          My Skills
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
        Here are my skills.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="bg-white text-black font-bold w-auto ml-[50%] -translate-x-1/2 border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl">
              Backend
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className="grid grid-cols-[auto,1fr] gap-4 border-2 border-black-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <div className="flex flex-col gap-1">
                <h1 className="text-[1.1rem] font-semibold sm:text-xl">
                ●Python
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Experienced
                </p>
                <h2 className="text-[1.1rem] font-semibold sm:text-xl">
                ●Golang
                </h2>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Experienced
                </p>
                <h1 className="text-[1.1rem] font-semibold sm:text-xl">
                ●C#, .Net
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Intermediate
                </p>
                <h1 className="text-[1.rem] font-semibold sm:text-xl">
                ●Rust
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Basic
                </p>
                <h1 className="text-[1.1rem] font-semibold sm:text-xl">
                ●C++
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Basic
                </p>
                <h1 className="text-[1.1rem] font-semibold sm:text-xl">
                ●Microservices
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Experienced
                </p>
                <h1 className="text-[1.rem] font-semibold sm:text-xl">
                ●AWS Lambda
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Experienced
                </p>
                </div>
                <div className="flex flex-col gap-1">
                <h1 className="text-[1.rem] font-semibold sm:text-xl">
                    ●OOP, OON
                  </h1>
                  <p className="text-[.9rem] text-justify break-words text-gray-500">
                    Experienced
                  </p>
                <h1 className="text-[1.rem] font-semibold sm:text-xl">
                    ●Postgres, GraphQL, MongoDb, Redis
                  </h1>
                  <p className="text-[.9rem] text-justify break-words text-gray-500">
                    Experienced
                  </p>
                  <h1 className="text-[1.rem] font-semibold sm:text-xl">
                ●SQL
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Experienced
                </p>
                <h1 className="text-[1.1rem] font-semibold sm:text-xl">
                ●NodeJS
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Experienced
                </p>
                <h1 className="text-[1.rem] font-semibold sm:text-xl">
                ●RESTful APIs, API Design
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Experienced
                </p>
                
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="bg-white text-black font-bold w-auto ml-[50%] -translate-x-1/2 border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl">
              Frontend
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className="grid grid-cols-[auto,1fr] gap-4 border-2 border-black-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <div className="flex flex-col gap-1">
                <h1 className="text-[1.1rem] font-semibold sm:text-xl">
                ●JavaScript
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Experienced
                </p>
                <h2 className="text-[1.rem] font-semibold sm:text-xl">
                ●ReactJS, React Native
                </h2>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Intermediate
                </p>
                <h1 className="text-[1.rem] font-semibold sm:text-xl">
                ●Html, CSS
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Experienced
                </p>
                <h1 className="text-[1.rem] font-semibold sm:text-xl">
                ●JQuery
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Experienced
                </p>
                <h1 className="text-[1.1rem] font-semibold sm:text-xl">
                ●Typescript
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Intermediate
                </p>
                <h1 className="text-[1.1rem] font-semibold sm:text-xl">
                ●UI/UX
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Intermediate
                </p>
                <h1 className="text-[1.rem] font-semibold sm:text-xl">
                ●Bootstrap
                </h1>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Experienced
                </p>
                </div>
                <div className="flex flex-col gap-1">
                <h1 className="text-[1.rem] font-semibold sm:text-xl">
                    ●NextJS
                  </h1>
                  <p className="text-[.9rem] text-justify break-words text-gray-500">
                    Intermediate
                  </p>
                </div>
                </div>
                </div>
              
          </fieldset>
        </div>
      </div>
      <h5><strong>Others:</strong> Git/Github, Elasticsearch, Puppeteer, automation and scripting, Docker, kubernetes, Agile methodologies, CI/CD, sunit tests, AWS, Linux/Unix, Postman, Django, Flask, Embeded systems etc.</h5>
    </div>
  );
};

export default Skills;

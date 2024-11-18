import React from "react";
import { EXPERIENCES } from "../constants";
import Image from "next/image";
const WorkExperience = () => {
  return (
    <div>
      <h2 className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100">
        Experience
      </h2>
      <div>
        {EXPERIENCES.map((e, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center p-4 lg:mb-24 md:justify-center"
          >
            <div className="mx-4">
              <Image
                src={e.img}
                alt={e.company}
                width={80}
                height={80}
                className="mb-2 mr-2 orunded-full border border-slate-400"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <p className=" mb-2 text-sm">{e.year}</p>
              <h6 className="font-semibold">{e.role}</h6>
              <span className="text-sm">{e.company}</span>
              <p className="my-4">{e.description}</p>
              {e.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded-full border border-slate-400 px-2 py-1 font-medium text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
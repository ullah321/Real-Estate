import { useEffect, useState } from "react";
import { assets, projectsData } from "./assets/assets";
import { motion } from "motion/react";

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length);
            } else {
                setCardsToShow(1);
            }
        };
            updateCardsToShow();

            window.addEventListener('resize', updateCardsToShow);
            return () => window.addEventListener('resize', updateCardsToShow);
    }, []);

    const nextBtn = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }

    const prevButton = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
    }


  return (
    <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="w-full container mx-auto py-4 pt-20 my-20 overflow-hidden px-6 md:px-20 lg:px-32" id="Projects">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center">Projects <span className="underline underline-offset-4 decoration-1 under font-light">Completed</span></h1>
      <p className="text-center text-sm mx-auto max-w-60 text-gray-500 mb-4">Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

      {/*---Slider Buttons---*/}
      <div className="flex justify-end items-center mb-6">
        <button onClick={prevButton} className="bg-gray-200 p-3 rounded mr-2" aria-level="Previous Project">
            <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextBtn} className="bg-gray-200 p-3 rounded mr-2" aria-level="Next Project">
            <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/*---Projects Slider Container---*/}
      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`
        }}>
            {projectsData.map((project, index) => (
                <div key={index} className="w-full relative flex-shrink-0 sm:w-1/4">
                    <img src={project.image} alt={project.title} className="rounded shadow-md w-full h-auto mb-12" />
                    <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                        <div className="inline-block bg-white w-3/4 py-2 px-2 shadow-md rounded">
                            <h2 className="text-center font-semibold text-gray-800">
                                {project.title}
                            </h2>
                            <p className="text-gray-500 text-sm text-center">
                                {project.price} <span className="px-1">|</span> {project.location}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects

import { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; 

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
   const sectionRef = useRef(null);
   const project1Ref = useRef(null);
   const project2Ref = useRef(null);
   const project3Ref = useRef(null);
   


   useGSAP(() => {
     const projects = [project1Ref.current, project2Ref.current, project3Ref.current]; 


    projects.forEach((card, index) => { //animate each card
    gsap.fromTo(card,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3 * (index +1), //stagger animation
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100", // when the top of the trigger hits the bottom of the viewport minus 100px
            }
        }
    )
   })


    gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5}
    )
   }, []);


  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT SIDE */}
                <a
                  ref={project1Ref}
                  href="/projects"
                  className="group first-project-wrapper "
                  >
                  <div className="image-wrapper">
                    <img
                      src="/images/620Fab.jpg"
                      alt="620 Fabrication Co"
                      className=" group-hover:scale-95 transition-transform"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-opacity"/>
                  <div className="text-content relative z-10">
                    <h2>620 Fabrication Co</h2>
                    <p className="text-white-50 md:text-xl">
                      Fully Responsive Website, developed with Next.js and React, styled using Tailwind CSS,
                      and written in TypeScript.
                    </p>
                  </div>
                </a>
                {/* RIGHT SIDE */}
                <div className="project-list-wrapper overflow-hidden ">
                    <a
                      ref={project2Ref}
                      href="/projects"
                      className="group project-2img"
                      >
                      <div className="image-wrapper bg-[#d0e2f9]">
                        <img
                          src="/images/skinnyDrip.jpg"
                          alt="Skinny Drip project"
                          className="group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="transition-overlay"/>
                      <h2 className="project-name">
                        Skinny Drip Website 
                      </h2>
                    </a>
                  
                    <a
                      ref={project3Ref}
                      href="/projects"
                      className="group project-2img "
                      >
                      <div className="image-wrapper bg-[#dbe3ff]">
                        <img
                          src="/images/mortgage.png"
                          alt="Mortgage Calculator"
                          className=" group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="transition-overlay"/>
                      <h2 className="project-name"> 
                        Mortgage Calculator
                      </h2>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Showcase
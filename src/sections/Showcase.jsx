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
                <div className='first-project-wrapper' ref={project1Ref} >
                    <div className='image-wrapper'>
                        <img src="/images/620Fab.jpg" alt="620 Fab project" />
                    </div>
                    <div className="text-content">
                        <h2>Fully Responsive Website for 620 Fabrication Co — Mobile & 
                            Desktop Experience</h2>
                            <p className="text-white-50 md:text-xl">
                                Developed with Next.js and React, styled using Tailwind CSS, 
                                and written in TypeScript.
                            </p>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="project-list-wrapper overflow-hidden">
                    <div  ref={project2Ref}>
                        <div className="image-wrapper bg-[#f8d0fd]">
                            <img src="/images/skinnyDrip.jpg" alt="Skinny Drip project" />
                        </div>
                        <h2>Skinny Drip Website</h2>
                    </div>

                    <div  ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/skinnyDrip.jpg" alt="Skinny Drip project" />
                        </div>
                        <h2>Skinny Drip Website</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Showcase
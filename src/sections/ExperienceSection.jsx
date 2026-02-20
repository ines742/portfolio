
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(() => {
        // Animate timeline cards as user scrolls
        gsap.utils.toArray('.timeline-card').forEach((card) => {
        //animate the card coming from the left with a fade-in effect
        gsap.from(card, {
            //move card from the left
            xPercent: -100,
            // make card invisible at the start of the animation
            opacity: 0,
            // set the transform origin to the left edge of the card
            transformOrigin: 'left left',
            duration: 1,
            // use power2 ease-in-out curve
            ease: 'power2.inOut',
            scrollTrigger: {
                // card is the trigger element for the animation
                trigger: card,
                // start the animation when the top of the card reaches 80% of the viewport height
                start: 'top 80%',
            }
            });
        })

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress, // scaleY from 1 to 0 as user scrolls down
                    })
                }
            },
        })

        gsap.utils.toArray('.expText').forEach((text) => {
        gsap.from(text, {
            xPercent: 0,
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: text,
                  start: 'top 60%',
            }
            });
        })
    }, []);

  return ( 
    <section id="experience" className='w-full md:mt-40 mt-20 section-padding xl:px-0 '>
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader 
            title="Professional Work Experience"
            sub="My Career Overview" />
            <div className='mt-32 relative'>
                <div className='relative z-50 xl:space-y-32 space-y-10'>
                    {expCards.map((card ) => (
                        <div key={card.title} className='exp-card-wrapper'>
                            <div className='xl:w-2/6'>
                             <GlowCard card={card} >
                                <div>
                                    <img src={card.imgPath} alt={card.title} />
                                </div>
                             </GlowCard>
                            </div>

                            <div className='xl:w-4/6'>
                              <div className='flex items-start'>
                                    <div className='timeline-wrapper'>
                                        <div className='timeline' />
                                        <div className='gradient-line w-1 h-full' />
                                    </div>

                                  <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                    <div className='timeline-logo'>
                                        <img src={card.logoPath} alt={`${card.company} logo`} />
                                    </div>
                                    <div>
                                      <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                      <p className='my-5 text-white-50'>{card.date}</p>
                                      <p className='text-[#839cb5] italic'>{card.company}</p>
                                      <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50' >
                                        {card.responsibilities.map((responsibility) => (
                                            <li key={responsibility} className='text-lg'>{responsibility}
                                            </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection
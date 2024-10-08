import { Grid2,Box } from "@mui/material"
import React,{useState,useRef,useEffect} from "react"
import './Consultant.css'; 

const Consultant = () => {
        const headingRef1 = useRef(null); // Ref for first heading element
        const headingRef2 = useRef(null); // Ref for second heading element
        const [isVisible1, setIsVisible1] = useState(false);
        const [isVisible2, setIsVisible2] = useState(false);
      
        useEffect(() => {
          const observer1 = new IntersectionObserver(
            (entries) => {
              const [entry] = entries;
              if (entry.isIntersecting) {
                setIsVisible1(true); // Start the animation when the first heading is visible
              } else {
                setIsVisible1(false); // Optionally, reset when scrolling out
              }
            },
            { threshold: 0.2 } // Adjust threshold to control when the animation starts
          );
          
          const observer2 = new IntersectionObserver(
            (entries) => {
              const [entry] = entries;
              if (entry.isIntersecting) {
                setIsVisible2(true); // Start the animation when the second heading is visible
              } else {
                setIsVisible2(false); // Optionally, reset when scrolling out
              }
            },
            { threshold: 0.2 } // Adjust threshold to control when the animation starts
          );
          
          if (headingRef1.current) {
            observer1.observe(headingRef1.current);
          }
          
          if (headingRef2.current) {
            observer2.observe(headingRef2.current);
          }
          
          return () => {
            if (headingRef1.current) {
              observer1.unobserve(headingRef1.current);
            }
            if (headingRef2.current) {
              observer2.unobserve(headingRef2.current);
            }
          };
        }, []);


  return (
    <div className="flex-col">
    <Grid2 className=' flex p-4 justify-between'>
        <img src="src\assets\imageforappointment.jpg" className='rounded-full bg-blue-50 w-2/6'/>
        <Box className='p-10 w-3/5'>
            <h1  ref={headingRef1} 
                 className={`font-bold text-blue-950 text-5xl p-8 leading-relaxed pl-16 transition-all duration-1000 ${
                 isVisible1 ? 'animate-slideUp' : '' // Add animation class when visible
          }`}>
                Book Appointment With
                <br/> Your Nearby Doctor
            </h1>
            <p className="font-medium  p-8 pl-16 leading-loose">
                <div className="mb-2 border-8 rounded-2xl bg-slate-200 transition-transform hover:scale-105">[1] Navigate to the appointment section through navigation bar or through the button given below.</div>
                <div className="mb-2 border-8 rounded-2xl bg-slate-200 transition-transform hover:scale-105">[2] Select the disease and you will see the list of our Specialists there</div>
                <div className="mb-2 border-8 rounded-2xl bg-slate-200 transition-transform hover:scale-105">[3] Select the doctor and the desired schedule</div>
                <div className="mb-2 border-8 rounded-2xl bg-slate-200 transition-transform hover:scale-105" >[4] Book your appointment at the time of your comfort</div>
            </p>
            <div className='p-6 pl-16'>
                <button className="border rounded-full bg-purple-600 text-white cursor-pointer p-3 text-lg hover:transition-transform hover:scale-105">
                    Book Appointment
                </button>
            </div>
        </Box>
    </Grid2>
    <Grid2 className=' flex p-4 justify-between'>
        <Box className='p-10 w-3/5'>
            <h1  ref={headingRef2} 
                 className={`font-bold text-blue-950 text-5xl p-8 leading-relaxed pl-16 transition-all duration-1000 ${
                 isVisible2 ? 'animate-slideUp' : '' // Add animation class when visible
          }`}>
                Get Content And<br/> Video Solutions In Click
            </h1>
            <p className="font-medium  p-8 pl-16 leading-loose">
                <div className="mb-2 border-8 rounded-2xl bg-slate-200 transition-transform hover:scale-105">[1] Navigate to the appointment section through navigation bar or through the button given below.</div>
                <div className="mb-2 border-8 rounded-2xl bg-slate-200 transition-transform hover:scale-105">[2] Select the disease and you will see the list of our Specialists there</div>
                <div className="mb-2 border-8 rounded-2xl bg-slate-200 transition-transform hover:scale-105">[3] Select the doctor and the desired schedule</div>
                <div className="mb-2 border-8 rounded-2xl bg-slate-200 transition-transform hover:scale-105" >[4] Book your appointment at the time of your comfort</div>
            </p>
            <div className='p-6 pl-16'>
                <button className="border rounded-full bg-purple-600 text-white cursor-pointer p-3 text-lg hover:transition-transform hover:scale-105">
                    Get Content
                </button>
            </div>
        </Box>
        <img src="src\assets\dietchart.jpg" className='rounded-full bg-blue-50 w-2/6'/>
    </Grid2>
       </div>
  )
}

export default Consultant
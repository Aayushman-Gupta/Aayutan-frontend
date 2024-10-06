import { Grid2,Box } from "@mui/material"

const Consultant = () => {
  return (
    <Grid2 className=' flex p-4 justify-between'>
        <img src="src\assets\doctor.png" className='rounded-full bg-blue-50 w-3/6'/>
        <Box className='p-10 w-3/5'>
            <h1 className="font-bold text-blue-950 text-5xl p-8 leading-relaxed pl-16">
                Book Appointment With
                <br/> Your Nearby Doctor
            </h1>
            <p className="font-medium  p-8 pl-16 leading-loose">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quas repellendus similique ipsam iusto sint, tempore odit id? Tempore, doloremque. Magnam praesentium nihil, laboriosam, eum itaque cumque 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores doloribus ipsa temporibus! Delectus dolorem, harum magnam a similique dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit aut doloribus ratione, sapiente possimus sed quos veniam pariatur dicta earum!
            </p>
            <div className='p-6 pl-16'>
                <button className="border rounded-full bg-purple-600 text-white cursor-pointer p-3 text-lg">
                    Book Appointment
                </button>
            </div>
        </Box>
    </Grid2>
  )
}

export default Consultant
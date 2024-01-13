import Navbar from '../conponent/Navbar'
import StudyExperience from '../conponent/StudyExperience';



export default function Example() {

  return (
<div className="h-[100vh]">
  <Navbar />
  <div className='h-[20vh]'></div>
  <StudyExperience hideTittle="" className="h-[100vh] mt-48"/>
</div>
  )
}

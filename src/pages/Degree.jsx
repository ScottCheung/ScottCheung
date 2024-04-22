import Contact from '../conponent/Contact';
import Navbar from '../conponent/Navbar';
import StudyExperience from '../conponent/StudyExperience';
import { hideRow, bgPic, useLanguage } from '../help/helpFunction';

export default function Example() {
  return (
    <div className='bg-gradient-to-br from-pink-100 from-10% via-pink-50 via-50% to-white/0 overflow-hidden'>
      <Navbar />
      <div className='flex justify-center w-full px-[28px] pt-[70px]'>
        <div
          className='h-[130vh] w-full bg-sky-200 animate__animated animate__zoomIn rounded-[28px] '
          style={{
            ...bgPic(
              'https://3o.hk/images/2024/01/19/LearningAbility.png',
              '800px auto',
              'bottom right',
            ),
          }}
        >
          <div className=' h-[60vh] flex justify-center items-center sm:text-[30px] md:text-[70px] lg:text-[150px] font-black animate__animated animate__fadeInUp'>
            I have 4 majors
          </div>
          <div className='h-[25vh] '></div>
          <StudyExperience hideTittle='ture' className='h-[100vh] ' />
          <Contact className='mt-[50vh] rounded-[28px] overflow-hidden p-[28px] ' />
        </div>
      </div>
    </div>
  );
}

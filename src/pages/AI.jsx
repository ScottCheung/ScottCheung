import Navbar from '../conponent/Navbar'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

export default function Example() {

  return (
<>
<div
  className="page-overview "
  data-component-list="PageXpController"
  data-anim-scroll-group="body"
>
  <Navbar />

  <main id="main" className="main" role="main">
    <section
      className="section section-welcome no-pad-bottom"
    >
      <div className="section-content-responsive mt-24">
        <header className="section-header row">
          <h1 className=" welcomeanimation section-header-headline">
          Artifical Inteliigence
          </h1>
          <div className="section-header-copy-container">
            <p>
              Master degree
            </p>
          </div>
        </header>
      </div>
      <div
        className="welcome-video-wall-container w-full flex justify-center py-16 flex-col z-50 bg-yellow-100 bg-cover bg-center sticky top-0 shadow-2xl" 
        style={{backgroundImage:"url(https://www.student.unsw.edu.au/sites/default/files/uploads/global/unsw-students-banner.png)"}}
        >
          <div className='flex flex-row justify-center items-center'>
              <img className='w-[220px] ' src="https://www.unsw.edu.au/content/dam/images/graphics/logos/unsw/unsw_0.png" alt="" />
          </div>
          
      </div>
      <div className='welcome-video-wall-container container space-y-6 h-auto'>
          <div className=" text-gray-500 pt-24 pb-4" >
            <h2 className="typography-section-intro-headline section-intro-headline">
            University Status 
            </h2>
          </div>
          <p className=' text-justify'>
          UNSW Sydney is Australia’s best university for career outcomes and second overall according to a new ranking published by The Australian Financial Review (AFR) today. UNSW ranked first for ‘career outcomes’, second for ‘research’ and for ‘global reputation’ and second university overall in Australia.
          </p>
          <p className=' text-justify'>
          UNSW Sydney has moved up 26 spots in the 2024 QS World University Rankings to equal 19th alongside its crosstown counterpart the University of Sydney. The two universities are now ranked equal second in Australia. The city of Sydney now boasts 10 per cent of the top 20 universities in the world, affirming the city’s reputation as a great global city for higher education. Of 38 Australian universities ranked, three (15 per cent) are in the global top 20, an extraordinary achievement for a nation of only 0.3 per cent of the world’s population.
          </p>
          <div className=" text-gray-500 pt-24 pb-4" >
            <h2 className="typography-section-intro-headline section-intro-headline">
            Artifical Inteliigence
            </h2>
          </div>
          <p className=' text-justify'>
          Functional materials are generally characterised as those materials which possess particular native properties and functions of their own. For example, ferroelectricity, piezoelectricity, magnetism or energy storage functions.
          </p>
          <p className=' text-justify'>
          Functional materials are found in all classes of materials: ceramics, metals, polymers and organic molecules. Functional materials are often used in electromagnetic applications from KHz to THz and at optical frequencies where the plasmonic properties of metals assume particular importance. Functional materials are also of critical importance in materials for energy such as electro- and magnetocaloric materials, for energy storage and for solar harvesting functions.
          </p>
          <div className=" text-gray-500 pt-24 pb-4" >
            <h2 className="typography-section-intro-headline section-intro-headline">
            Main Course
            </h2>
          </div>
          <p className=' text-justify'>
          Functional materials are generally characterised as those materials which possess particular native properties and functions of their own. For example, ferroelectricity, piezoelectricity, magnetism or energy storage functions.
          </p>
          <div className=''>
          <div className="relative overflow-x-auto">
  <table className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Course
        </th>
        <th scope="col" className="px-6 py-3">
          Type
        </th>
        <th scope="col" className="px-6 py-3">
          descrition
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">White</td>
        <td className="px-6 py-4">Laptop PC</td>
      </tr>
    </tbody>
  </table>
  <table className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Course
        </th>
        <th scope="col" className="px-6 py-3">
          Type
        </th>
        <th scope="col" className="px-6 py-3">
          descrition
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">White</td>
        <td className="px-6 py-4">Laptop PC</td>
      </tr>
    </tbody>
  </table>
  <table className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Course
        </th>
        <th scope="col" className="px-6 py-3">
          Type
        </th>
        <th scope="col" className="px-6 py-3">
          descrition
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">White</td>
        <td className="px-6 py-4">Laptop PC</td>
      </tr>
    </tbody>
  </table>
  <table className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Course
        </th>
        <th scope="col" className="px-6 py-3">
          Type
        </th>
        <th scope="col" className="px-6 py-3">
          descrition
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">White</td>
        <td className="px-6 py-4">Laptop PC</td>
      </tr>
    </tbody>
  </table>
  <table className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Course
        </th>
        <th scope="col" className="px-6 py-3">
          Type
        </th>
        <th scope="col" className="px-6 py-3">
          descrition
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">White</td>
        <td className="px-6 py-4">Laptop PC</td>
      </tr>
    </tbody>
  </table>
  <table className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Course
        </th>
        <th scope="col" className="px-6 py-3">
          Type
        </th>
        <th scope="col" className="px-6 py-3">
          descrition
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">White</td>
        <td className="px-6 py-4">Laptop PC</td>
      </tr>
    </tbody>
  </table>
  <table className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Course
        </th>
        <th scope="col" className="px-6 py-3">
          Type
        </th>
        <th scope="col" className="px-6 py-3">
          descrition
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">White</td>
        <td className="px-6 py-4">Laptop PC</td>
      </tr>
    </tbody>
  </table>
  <table className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Course
        </th>
        <th scope="col" className="px-6 py-3">
          Type
        </th>
        <th scope="col" className="px-6 py-3">
          descrition
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">White</td>
        <td className="px-6 py-4">Laptop PC</td>
      </tr>
    </tbody>
  </table>
  <table className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Course
        </th>
        <th scope="col" className="px-6 py-3">
          Type
        </th>
        <th scope="col" className="px-6 py-3">
          descrition
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">White</td>
        <td className="px-6 py-4">Laptop PC</td>
      </tr>
    </tbody>
  </table>
</div>

          </div>
      </div>

    </section>
  </main>
</div>
<script src="./appleStyleGrid/main.built.js" type="text/javascript" charset="utf-8"></script>
  <span style={{visibility: "hidden", position: "absolute", top: "0px", zIndex: "-1"}}>&nbsp;</span>
</>
  )
}

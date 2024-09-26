import React, { useRef } from 'react';
import DockerBar from '../../conponent/DockerBar';
import Docker from '../../conponent/Docker';
import Navbar from '../../conponent/NavBar/Navbar';
import CV from './CV';
import html2pdf from 'html2pdf.js';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

export default function Resume({ print }) {
  return (
    <div className='flex flex-col w-screen h-full overflow-auto bg-white md:justify-center'>
      {!print && (
        <div className='fixed top-0 z-50'>
          <Navbar />
        </div>
      )}
      {!print && <DockerBar />}
      <div className='flex justify-center w-full h-full'>
        <div
          className={
            print
              ? 'w-full h-full '
              : 'my-[15%] max-w-[1200px]  flex justify-center items-center  h-full pb-[20%]'
          }
        >
          <CV />
        </div>
      </div>
    </div>
  );
}

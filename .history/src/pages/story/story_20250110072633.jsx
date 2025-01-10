/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';
const posts = [
  'https://www.instagram.com/p/DEP-NTcvgrC/',
  'https://www.instagram.com/p/DEFAn3fPb1V/',
  'https://www.instagram.com/p/DEAraw0Th6A/',
  'https://www.instagram.com/p/DEAraw0Th6A/',
  'https://www.instagram.com/reel/DDKZBeXviBs/',
  'https://www.instagram.com/p/DDBcdmvvlCX/',
  'https://www.instagram.com/p/DCvzz7tPa7L/',
  'https://www.instagram.com/p/DBl9aiHvbCT/',
  'https://www.instagram.com/p/DAl0RsiTq7s/',
  'https://www.instagram.com/reel/DAdqEErPSrc/',
  'https://www.instagram.com/reel/DAI_opKP4UB/',
  'https://www.instagram.com/p/C_p_3SbvMIL/',
  'https://www.instagram.com/p/C_i8lRsTnMF/',
  'https://www.instagram.com/reel/C_V2DsWP_Ou/',
  'https://www.instagram.com/reel/C_Iqc02vtCU/',
  'https://www.instagram.com/reel/C_AuZREP9l_/',
  'https://www.instagram.com/p/C-5fS9uP-h1/',
  'https://www.instagram.com/reel/C-y03HSyTyX/',
  'https://www.instagram.com/p/C-yJXh1zngm/',
  'https://www.instagram.com/reel/C-k9cnTvbAf/',
  'https://www.instagram.com/reel/C910WxSPSkf/',
  'https://www.instagram.com/reel/C869VEXPeA6/',
  'https://www.instagram.com/p/C8xUqiSSLET/',
  'https://www.instagram.com/p/C7J6jdqP-7H/',
  'https://www.instagram.com/p/C7J6jdqP-7H/',
  'https://www.instagram.com/p/C61TZ1AvJCc/',
  'https://www.instagram.com/p/C58bk0qPbkC/',
  'https://www.instagram.com/p/C43M0GvPjS6/',
  'https://www.instagram.com/p/C32tiBLy0zT/',
  'https://www.instagram.com/p/C32tVULyIL9/',
  'https://www.instagram.com/p/C25aWplSxIi/',
  'https://www.instagram.com/p/C0dEAHqLlr8/',
  'https://www.instagram.com/p/C0dD0OCrcwq/',
  'https://www.instagram.com/p/C0I-3D_S8ie/',
  'https://www.instagram.com/p/CzusidjSUOo/',
  'https://www.instagram.com/p/CzusgT2y_qa/',
  'https://www.instagram.com/p/Cw-fQViSet1/',
  'https://www.instagram.com/p/Cw-UtF2yrJT/',
  'https://www.instagram.com/p/CwvpSF9SeFp/',
  'https://www.instagram.com/p/CwsXbOPyGnY/',
  'https://www.instagram.com/p/CwsXUMXSoy0/',
  'https://www.instagram.com/p/CwsW1sCSTep/',
  'https://www.instagram.com/p/CwsWpT3SSeY/',
  'https://www.instagram.com/p/CwsWPxUykkK/',
  'https://www.instagram.com/reel/CwgS0DPyoTu/',
  'https://www.instagram.com/reel/Cwfxpf6qd3b/',
  'https://www.instagram.com/reel/CwfxnXzqlOt/',
  'https://www.instagram.com/p/Cvh9RehyJPG/',
  'https://www.instagram.com/p/Cvh9PTEynUP/',
  'https://www.instagram.com/p/CuZNbUGyXLK/',
  'https://www.instagram.com/reel/Ct1Snrhtj0h/',
  'https://www.instagram.com/reel/Ct1SicotxZV/',
  'https://www.instagram.com/p/CteBX9WycIa/',
  'https://www.instagram.com/p/CtWS8Gsyar4/',
  'https://www.instagram.com/p/CtWS3uEyak-/',
  'https://www.instagram.com/p/CtWSjJ4yn7b/',
  'https://www.instagram.com/p/CtWShwLS0Ze/',
  'https://www.instagram.com/p/CsrjVeJSuGV/',
  'https://www.instagram.com/p/CsrjUBKyqR8/',
  'https://www.instagram.com/p/CsrjSWby4Yd/',
  'https://www.instagram.com/p/CsrjPa6yObV/',
  'https://www.instagram.com/p/Cr1nTDeyT-x/',
  'https://www.instagram.com/p/Cr1nOgdyyxy/',
  'https://www.instagram.com/p/Cr1nL7DylZu/',
  'https://www.instagram.com/p/Cr1nKayyNRZ/',
  'https://www.instagram.com/p/Cr1nIrESo1H/',
  'https://www.instagram.com/reel/CrcxplBP9ym/',
  'https://www.instagram.com/p/CrDWPRrvAUf/',
  'https://www.instagram.com/p/CqxPqCCuawe/',
  'https://www.instagram.com/p/Cps8LFLSMcA/',
  'https://www.instagram.com/p/Cps7qxGyqN5/',
  'https://www.instagram.com/reel/CpT81rnMg5O/',
  'https://www.instagram.com/reel/Cml9G93qRuT/',
  'https://www.instagram.com/p/Cl9SoRrSZGn/',
  'https://www.instagram.com/p/Cl82rp0yMYH/',
  'https://www.instagram.com/p/Cl82nWYSxNv/',
  'https://www.instagram.com/p/Cl82k3zSxs2/',
  'https://www.instagram.com/p/Cl82gYOyjJA/',
  'https://www.instagram.com/p/Cl82fAPyz6e/',
  'https://www.instagram.com/p/Cl82Yw7yaif/',
  'https://www.instagram.com/p/Cl82A4iyyT4/',
  'https://www.instagram.com/p/Cl819NSyHHX/',
  'https://www.instagram.com/p/Cl8132qyNoO/',
  'https://www.instagram.com/p/Cl81l1kyZlW/',
  'https://www.instagram.com/p/Cl81jjNykdf/',
  'https://www.instagram.com/p/CjqilCxPiIe/',
  'https://www.instagram.com/p/CjqiitpP3Bv/',
  'https://www.instagram.com/p/CjqigThPbUM/',
  'https://www.instagram.com/p/Cjqierrvzqj/',
  'https://www.instagram.com/p/CjNuXbZvl97/',
  'https://www.instagram.com/p/CjNuVu6PnZB/',
  'https://www.instagram.com/p/CjNuMYnPf1k/',
  'https://www.instagram.com/p/CjNuHzBvdxX/',
  'https://www.instagram.com/p/CjNuFP6PB2t/',
  'https://www.instagram.com/p/CjNt_cIvHi-/',
  'https://www.instagram.com/p/CjC44_cvnIb/',
  'https://www.instagram.com/p/CjC4u2mPEWP/',
  'https://www.instagram.com/p/CjC4emdP8SX/',
  'https://www.instagram.com/p/CjC4Qi2v0BO/',
  'https://www.instagram.com/p/CjC4JdwPyfG/',
  'https://www.instagram.com/p/CjC3otpOgs7/',
  'https://www.instagram.com/p/CjC3d1XuUbd/',
  'https://www.instagram.com/p/CjC3MKRuW1G/',
  'https://www.instagram.com/p/CjCG_DsPxb9/',
  'https://www.instagram.com/p/CjCFri8PW80/',
];

export default function gobelldesign() {
  return (
    <div className='flex p-3 '>
      <Navbar BG={'bg-white'} />
      <div className='pt-[140px] flex flex-col w-screen h-full overflow-x-hidden items-center justify-start'>
        <h1 className='text-[40px] font-bold text-center mb-8'>Story</h1>
        <div className='max-w-[1400px] w-full masonry-grid'>
          <script async src='//www.instagram.com/embed.js'></script>

          {posts.map((post, index) => (
            <div
              key={index}
              className='flex overflow-hidden bg-red-500 grid-item '
            >
              <iframe
                src={`${post}embed`}
                className='w-full flex h-[900px] ratio-16/9'
              ></iframe>
              ,
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

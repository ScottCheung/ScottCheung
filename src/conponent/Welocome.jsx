import React from 'react';

function Welcome () {
  
  const Welcome = (
    <div id="carousel-hestia-generic" className="carousel ">
    <div className="bg-cover bg-center slide" data-ride="carousel">
        <div className="carousel-inner ">

            <div className="item active ">
                <div className="page-header h-[100vh]" >
                    
                    {/* Home hello des */}
                    <div className="container ">
                        <div className="row h-[50%]">
                            <div className="big-title-sidebar-wrapper  col-md-5  -slider-alignment-right ">
                            </div>
                            <div className=" big-title-slider-content text-right col-md-12 margin-left-auto margin-right-auto mt-16">
                                <h1 className=" animate__animated animate__slideInLeft -title text-9xl">Welcome! I'm <strong>Scott.</strong></h1>
                                <h2 className=" animate__animated animate__slideInRight text-3xl">Sidere mens eadem mutato</h2>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>

</div>
  );

  return (
    <div >
      {Welcome}
    </div>
  );
}

export default Welcome;

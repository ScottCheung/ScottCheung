import React from 'react'
import Navbar from '../conponent/Navbar'

export default function Certificate () {
  return (
    <>
<>
<div
  className="page-overview "
  data-component-list="PageXpController"
  data-anim-scroll-group="body"
>
  <nav
    id="chapternav"
    className=" with-paddles hidden"
    data-analytics-region="family browser"
    data-analytics-activitymap-region-id="chapternav"
  >
    <ul className="chapternav-items"></ul>
    <div className="chapternav-paddles">
      <button
        className="chapternav-paddle chapternav-paddle-left"
        aria-hidden="true"
      ></button>
      <button
        className="chapternav-paddle chapternav-paddle-right"
        aria-hidden="true"
      ></button>
    </div>
  </nav>
  <main id="main" className="main" role="main" data-page-type="overview">
    <section
      className="section section-welcome no-pad-bottom"
      data-anim-scroll-group="Welcome"
      data-component-list="WelcomeEnhanced WelcomeMedia"
      data-analytics-section-engagement="name:hero"
    >
      <div className="section-content-responsive">
        <header className="section-header row">
          <h1 className="text-[50px] welcomeanimation section-header-headline typography-section-headline">
            Certificate
          </h1>
          <div className="section-header-copy-container">
            <p>
              If you can dream it, <br />
              just can do it.
            </p>
          </div>
        </header>
      </div>
      <div
        className="welcome-video-wall-container"
        style={{ clipPath: "inset(0%)" }}
      >
          大大大
      </div>
    </section>
  </main>
</div>
<script src="./appleStyleGrid/main.built.js" type="text/javascript" charset="utf-8"></script>
  <span style={{visibility: "hidden", position: "absolute", top: "0px", zIndex: "-1"}}>&nbsp;</span>
</>
 
    </>
  )
}

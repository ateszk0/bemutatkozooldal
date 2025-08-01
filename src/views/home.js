import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <img src="/basiclogo-200h.png" alt="image" className="home-image1" />
          <div
            data-thq="thq-dropdown"
            className="home-language-switcher list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="home-language-switcher-list"
            >
              <div>
                {locales.map((all_languages, index) => (
                  <Fragment key={index}>
                    <div className="home-language-switcher-item">
                      <span>{all_languages?.name}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </ul>
          </div>
          <div className="home-links-container1">
            <span className="home-link1 Navbar-Link">
              <span>{/*locale-link_hGjfmX*/}</span>
            </span>
            <span className="home-link2 Navbar-Link">
              <span>{/*locale-link_ZkioEL*/}</span>
            </span>
            <span className="home-link3 Navbar-Link">
              <span>{/*locale-link_2Rjwa2*/}</span>
            </span>
            <span className="Navbar-Link">
              <span>{/*locale-link_oc3K8-*/}</span>
            </span>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container3">
              <span className="Card-Heading home-heading1">
                <span>{/*locale-Heading_yK2Txr*/}</span>
              </span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container2">
              <span className="home-link5 Navbar-Link">
                <span>{/*locale-link_Vmr-z9*/}</span>
              </span>
              <span className="home-link6 Navbar-Link">
                <span>{/*locale-link_7jyKK6*/}</span>
              </span>
              <span className="home-link7 Navbar-Link">
                <span>{/*locale-link___Sygb*/}</span>
              </span>
              <span className="Navbar-Link">
                <span>{/*locale-link_NKKnQT*/}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <div className="home-section-separator2"></div>
      <div className="home-container4">
        <div className="home-hero">
          <img src="/profile-300h.jpg" alt="image" className="home-image2" />
          <div className="home-hero-text-container">
            <h1 className="home-heading2">
              <span>{/*locale-Heading_3f92gj*/}</span>
            </h1>
            <span className="home-text1">
              <span>{/*locale-Text_7YqcR7*/}</span>
            </span>
            <div className="home-cta-btn-container">
              <button className="home-cta-btn1 Anchor button">
                <span className="home-text2">
                  <span>{/*locale-text_G2LtYs*/}</span>
                </span>
              </button>
              <button className="home-cta-btn2 button Anchor">
                <span>{/*locale-cta-btn_g0gBjN*/}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text3 Section-Heading">
            <span>{/*locale-text_McNLrA*/}</span>
          </h2>
          <span className="home-text4">
            <span>{/*locale-text_6PROQz*/}</span>
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card1">
            <div className="home-icon-container1">
              <svg height="1024" width="1024" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"
                ></path>
              </svg>
            </div>
            <div className="home-content-container1">
              <span className="home-heading3 Card-Heading">
                <span>{/*locale-heading_Q0tpsK*/}</span>
              </span>
              <span className="home-text5 Card-Text">
                <span>{/*locale-text_-kez0S*/}</span>
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <svg
                height="1024"
                width="1024"
                viewBox="0 0 1024 1024"
                className="home-icon16"
              >
                <path
                  fill="currentColor"
                  d="M992 512H832v256h64q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5H704q-27 0-45.5-18.5T640 960V832q0-26 18.5-45t45.5-19h64V512H320v256h64q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5H192q-27 0-45.5-18.5T128 960V832q0-26 18.5-45t45.5-19h64V512H32q-13 0-22.5-9.5T0 480t9.5-22.5T32 448h480V256h-64q-27 0-45.5-18.5T384 192V64q0-26 18.5-45T448 0h192q26 0 45 19t19 45v128q0 27-19 45.5T640 256h-64v192h416q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 512"
                ></path>
              </svg>
            </div>
            <div className="home-content-container2">
              <span className="home-heading4 Card-Heading">
                <span>{/*locale-heading_NXzhwg*/}</span>
              </span>
              <span className="home-text6">
                <span>{/*locale-text_lPH4gO*/}</span>
              </span>
            </div>
          </div>
          <div className="home-card3">
            <div className="home-icon-container3">
              <svg height="256" width="256" viewBox="0 0 256 256">
                <path
                  fill="currentColor"
                  d="M196 35.52C177.62 25.51 153.48 20 128 20s-49.62 5.51-68 15.52C39.37 46.79 28 62.58 28 80v96c0 17.42 11.37 33.21 32 44.48c18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52c20.66-11.27 32-27.06 32-44.48V80c0-17.42-11.37-33.21-32-44.48m8 92.48c0 17-31.21 36-76 36s-76-19-76-36v-8.46a89 89 0 0 0 8 4.94c18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52a89 89 0 0 0 8-4.94Zm-76-84c44.79 0 76 19 76 36s-31.21 36-76 36s-76-19-76-36s31.21-36 76-36m0 168c-44.79 0-76-19-76-36v-8.46a89 89 0 0 0 8 4.94c18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52a89 89 0 0 0 8-4.94V176c0 17-31.21 36-76 36"
                ></path>
              </svg>
            </div>
            <div className="home-content-container3">
              <span className="home-heading5 Card-Heading">
                <span>{/*locale-heading_mp3xfx*/}</span>
              </span>
              <span className="home-text7">
                <span>{/*locale-text_j-jCEl*/}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-section-separator5"></div>
      <div className="home-section-separator6"></div>
      <div className="home-section-separator7"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon20">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon22">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon24">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon26">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">
              <span>{/*locale-link_moxNr2*/}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

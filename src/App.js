import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Special from './components/Special';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
   <div className='App'>
    {loading ? (
        <div className="loader-container">
      	  <div className="spinner">
            <img src="./images/Loading_icon.gif" alt="" />
          </div>
        </div>
      ) : (
      <><div className="container-fluid home">
            <a id='home'>
              <div className="row">
                <div className="col-lg-5 bg-light">
                  <img src="./images/entete.jpg" alt="Lead image" className='lead_image'/>
                </div>

                <div className="col-lg-7 bg-light pt-4">
                  <Navbar />

                  <div className='text-center mb-5'>
                    <h2 className="title-1 title display-6 ">Veggies es bonus vobis, <br /> proinde vos postulo essum</h2>
                    <img src="./images/ligne_deco.png" alt="Decoration line" className='mb-5' />
                  </div>

                </div>
              </div>
            </a>
          </div><div className="container-fluid first-section pt-5 pb-5">
              <div className="row ms-4 me-4 pb-3 pt-3">
                <div className="col-lg-4 col-md-4 pe-1 mb-3 text-center">
                  <img src="./images/img1.png" alt="Font image" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit perferendis laborum totam tempore sequi porro tenetur quia.</p>
                </div>
                <div className="col-lg-4 col-md-4 pe-1 mb-3 text-center">
                  <img src="./images/img2.png" alt="Font image" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit perferendis laborum totam tempore sequi porro tenetur quia.</p>
                </div>
                <div className="col-lg-4 col-md-4 pe-1 mb-3 text-center">
                  <img src="./images/img3.png" alt="Font image" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit perferendis laborum totam tempore sequi porro tenetur quia.</p>
                </div>

              </div>
            </div><div className="second-section container-fluid mb-5">
              <a id='specials'>
                <div className='text-center mt-5 pt-2 mb-5'>
                  <h2 className="title display-6 mt-5">This month is special</h2>
                  <img src="./images/ligne_deco_2.png" alt="Decoration line" className='' />
                </div>
                <div className="row d-flex align-items-center justify-content-center mt-5">
                  <Special image="./images/plat_1.jpg" title="Green fava"></Special>
                  <Special image="./images/plat_2.jpg" title="Celery quandong"></Special>
                  <Special image="./images/plat_3.jpg" title="Pea horseraddish"></Special>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                  <Special image="./images/plat_4.jpg" title="Green fava"></Special>
                  <Special image="./images/plat_5.jpg" title="Celery quandong"></Special>
                  <Special image="./images/plat_6.jpg" title="Pea horseraddish"></Special>
                </div>

              </a>
            </div><div className="third-section container-fluid bg-light">
              <a id='about'>
                <div className="row">
                  <div className="col-lg-7  pt-4">
                    <div className='text-center'>
                      <h2 className="title-1 title display-6">About Us</h2>
                      <img src="./images/ligne_deco_3.png" alt="Decoration line" />
                      <p className="title sub-title mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />  Lorem ipsum dolor sit, amet consectetur adipisicing <br /> Lorem ipsum dolor sit, amet consectetur adipi</p>
                      <img src="./images/signature.png" alt="Signature" />
                    </div>
                  </div>

                  <div className="col-lg-5 d-flex justify-content-center">
                    <img src="./images/passoire.jpg" alt="" />
                  </div>
                </div>
              </a>
            </div></>
      )}
   </div>
  );
}

export default App;

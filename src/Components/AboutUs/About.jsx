import React from "react";
import "./About.css";
import aboutFirstImages from "../Assets/aboutFirstImg.jpg";
import secondImages from "../Assets/secondAboutimg.jpg";
import thirdImages from "../Assets/thirdImg.jpg";
import fourImg from "../Assets/fourImg.jpg";
import fifthImg from "../Assets/fifthImg.jpg";
import fullImgAbout from "../Assets/fullImgAbout.jpg";
import Footer from "../Footer/Footer";
import NavbarPage from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <NavbarPage />
      <div className="aboutWrapper">
        <div className="aboutHeader">
          <h1>Biz haqmizda</h1>
        </div>
        <div className="whoIsOurUser">
          <h1>Bizning xizmat turlarimiz qanday?</h1>
          <div className="firstCardSection">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Uy - Joy Sotuvchi</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Xavfsizligi kafolatlangan
                      </h6>
                      <p className="card-text">
                        Uy-Joyni online holatda O'zbekistonning har bir
                        burchagiga ishonchli sotishingiz va o'zingizni
                        orzularingizdagi uylarni harid qilishingiz mumkin.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Uy - Joy ijaraga beruvchi</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Xavfsizligi kafolatlangan
                      </h6>
                      <p className="card-text">
                        Uy-Joyni online holatda O'zbekistonning har bir
                        burchagiga ishonchli holatda ijarag berishingiz mumkin
                        va albatta bu juda ham qulay.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card aboutCardStyle">
                    <div className="card-body">
                      <h5 className="card-title">Uy- Joy ijaraga oluvchi</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Xavfsizligi kafolatlangan
                      </h6>
                      <p className="card-text">
                        Uy-Joyni online holatda O'zbekistonning har bir
                        burchagidan ishonchli holatda ijarag olishingiz mumkin
                        va albatta bu juda ham qulay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="secondCardSection">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6  secondFirstCol">
                  <h1>
                    Biz sizning bitimlaringizni yaxshilash uchun{" "}
                    <span className="styleColorForText">
                      {" "}
                      eng yaxshi agentlikmiz
                    </span>
                  </h1>
                  <h1 className="secondh1">
                    Biz bevosita mijozlarimiz uchun ishlaymiz va mijozning
                    manfaatlarini birinchi o'ringa qo'yamiz.
                  </h1>
                </div>
                <div className="col-sm-12 col-md-6 secondFirstCol">
                  <h4>
                    ComFlat - bu <b>Uy-Joy</b> sotish va sotib olish, ijarga
                    berish va ijaraga olish tizimini boshqaruvchi kompaniyadir.
                    Undan O'zbekistonning barcha shaharlarida mksimum holatda
                    foydalanish bemalol foydalanish mumkin.
                    <br /> <br />
                    Agar bu loyiha sizlarga ozgina bo'lsa ham yordam berayotgan
                    bolsa biz hursandmiz(:
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="thirdSection">
            <h1>Biz bilan eng qulay va zamonaviy uy joylarni toping!(:</h1>
            <div className="container thirdSectionInAbout">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="text-center">
                    <img
                      src={aboutFirstImages}
                      className="firstImages"
                      alt="Images"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <img
                        src={secondImages}
                        className="firstImages"
                        alt="Images"
                      />
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <img
                        src={thirdImages}
                        className="firstImages"
                        alt="Images"
                      />
                    </div>{" "}
                    <br />
                    <br />
                    <div className="col-sm-12 col-md-6">
                      <img
                        src={fourImg}
                        className="firstImages1"
                        alt="Images"
                      />
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <img
                        src={fifthImg}
                        className="firstImages1"
                        alt="Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img className="firstImages" src={fullImgAbout} alt="Images" />
            </div>
          </div>
          <div className="fourthSectionInAbout">
            <div className="container">
              <div className="row fifthSentralFrame">
                <div className="col-sm-8">
                  <h1>Biz bilan orzularingizdagi uyni toping!</h1>
                </div>
                <div className="col-sm-4">
                  <br />
                  <Link to="/home">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg aboutBtn"
                    >
                      Boshlash
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

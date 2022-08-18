import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Biz bilan ijtimoiy tarmoqlar orqali bog'lanish:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/abdurashidAlisherivich"
              className="me-4 text-reset"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://t.me/Abdurashid_Developer" className="me-4 text-reset">
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="https://www.instagram.com/abdurashid.nabijonov"
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/abdurashid-nabijonov/"
              className="me-4 text-reset"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Abdurashid-Alisherivich"
              className="me-4 text-reset"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>ComFlat
                </h6>
                <p>
                  Assalomu Alaykum qadrdon! Siz bu sahifa orqali o'zingiz orzu
                  qilgan uy-joylarni sotib olishingiz yoki shinam xonadonlarni
                  ijarag olishingiz mumkin.
                  Agar Sizga yordam bera olgan bolsak juda ham hursandmiz(:
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Xizmatlar</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Uy-Joy Sotish
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Ijarag qo'yish
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Ijaraga olish
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Foydali linklar</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Aloqa</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Fergana, Bagdod
                </p>
                <p>
                  <i className="fab fa-telegram me-3"></i>
                  <a href="https://t.me/Abdurashid_Developer">Abdurashid</a>
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 998 90 366 10 56
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 998 90 851 08 40
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2022 ComFlat:
          <a className="text-reset fw-bold" href="https://www.facebook.com/abdurashidAlisherivich">
            Team
          </a>
        </div>
      </footer>
    </div>
  );
}

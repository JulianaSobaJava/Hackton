import { t } from "i18next";
import { information, mainMennu } from "../mocks/data";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container grid">
        <div>
          <a href="" className="footer_logo">
            <img
              src="./logo.png"
              alt="footer image"
              className="footer_logo_img"
            />
            Sushi
          </a>
          <p className="footer_description">
            {t("Food for the body is not enough")}. {t("There must be food for the soul")}.
          </p>
        </div>
        <div className="footer_content">
          <div>
            <h3 className="footer_title">{t("Main Menu")}</h3>
            <ul className="footer_links">
            {mainMennu.map((opt,index)=>(
                 <li key={index}>
           <a href={opt.id} className="footer_link">{t(opt.name)}</a>
                 </li>
            ))}
            </ul>
          </div>
          <div>
            <h3 className="footer_title">{t("Information")}</h3>
            <ul className="footer_links">
            {information.map((opt,index)=>(
                 <li  key={index}>
           <a href={opt.id} className="footer_link">{t(opt.name)}</a>
                 </li>
            ))}
            </ul>
          </div>
          <div>
            <h3 className="footer_title">{t("Adress")}</h3>
            <ul className="footer_links">
              <li className="footer_information">
                Av. Hacienda 1234 <br />
                Lima 4321, Perú
              </li>
              <li className="footer_information">9AM - 11PM</li>
            </ul>
          </div>
        </div>
        <img
          src="./spring-onion.png"
          alt="footer image"
          className="footer_onion"
        />
        <img
          src="./spinach-leaf.png"
          alt=".r image"
          className="footer_spinach"
        />
        <img
          src="./leaf-branch-4.png"
          alt="footer image"
          className="footer_leaf"
        />
      </div>
      <div className="footer_info container">
        <div className="footer_card">
          <img src="./footer-card-1.png" alt="footer image" />
          <img src="./footer-card-2.png" alt="footer image" />
          <img src="./footer-card-3.png" alt="footer image" />
          <img src="./footer-card-4.png" alt="footer image" />
        </div>

        <span className="footer_copy">
          &#169; Copyright Bedimcode. All rights reserved
        </span>
      </div>
    </footer>
  )
}

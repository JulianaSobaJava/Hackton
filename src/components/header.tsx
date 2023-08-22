import {useTranslation} from 'react-i18next'
import { options } from '../mocks/data'
import LangSelection from './langOption'
import { HeaderProps } from '../utils/type'




export default function Header({option, currentCountry}:  HeaderProps) {
    const {t} = useTranslation()
    
  return (
    <header className="header" id="header">
    <nav className="nav container">
      <a href="#" className="nav_logo">
        <img src="image/logo.png" alt="" className="logo image" />
        Sushi
      </a>

      <div className="nav_menu" id="nav-menu">
        <ul className="nav_list grid">
            {options.map((opt,index)=>(
                 <li className="nav_item" key={index}>
           <a href={opt.id} className="nav_link">{t(opt.name)}</a>
                 </li>
            ))}
        </ul>

        <div className="nav_close" id="nav-close">
          <i className="ri-close-line"></i>
        </div>
        <img src="image/leaf-branch-4.png" alt="nav image" className="nav_img1" />

        <img src="image/leaf-branch-3.png" alt="nav image" className="nav_img2" />
      </div>
        <div className="nav_buttons">
          <i className="ri-moon-line change_theme" id="theme-button"></i>
          <div className="nav_togle" id="nav-togle">
            <i className="ri-apps-line"></i>
          </div>
        </div>
      <LangSelection option={option} />
    </nav>
  </header>
  )
}

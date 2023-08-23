import { useTranslation } from 'react-i18next'
import LangSelection from './langOption'
import { optionsNav } from '../mocks/data'




export default function Header() {
    const { t } = useTranslation()

    return (
        <header className="header" id="header">
            <nav className="container nav">
                <a href="#" className="nav_logo">
                    <img src="image/logo.png" alt="" className="logo image" />
                    Sushi
                </a>

                <div className="nav_menu" id="nav-menu">
                    <ul className="grid nav_list">
                        {optionsNav.map((opt, index) => (
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
                <LangSelection />
            </nav>
        </header>
    )
}

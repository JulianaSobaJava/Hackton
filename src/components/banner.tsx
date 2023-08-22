import { useTranslation } from 'react-i18next'

export default function Banner() {
    const {t} = useTranslation()

  return (
    <section className="home section" id="home">
    <div className="home_container container grid">
      <img
        src="./home-sushi-rolls.png"
        alt="home image"
        className="home_img"
      />
      <div className="home_data">
        <h1 className="home_title">
        {t("Enjoy Delicious")}
          
          <div>
            <img src="./home-sushi-title.png" alt="home image title" />
            {t("Sushi Food")}
          </div>
        </h1>
        <p className="home_description">
          {t("Enjoy")} {t("a")} {t("good dinner")} {t("with the best")} {t("dishes")} {t("in restaurant and improve your")} {t("day")}.
        </p>

        <a href="#" className="button">{t("Order Now")}</a>
      </div>
    </div>

    <img
      src="./leaf-branch-2.png"
      alt="home image"
      className="home_leaf-1"
    />
    <img
      src="./leaf-branch-4.png"
      alt="home image"
      className="home_leaf-2"
    />
  </section>
  )
}

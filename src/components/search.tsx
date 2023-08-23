import { HiSearch } from "react-icons/hi"
import { FormEvent, useEffect, useState } from "react"
import { api } from "../utils/service"
import { t } from "i18next"
import { Oval } from 'react-loader-spinner'

export default function Search() {
    const [text, setText] = useState('')
    // const [country, setCountry] = useState<string>()
    const [name, setName] = useState('')
    const [description, setDescription] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [responseData, setResponseData] = useState<boolean>(false)

    const country = 'pt'
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        api.post("/search", { destino: country, originalText: text })
            .then(data => {
                setLoading(true)
                if (data.status === 200) {
                    setResponseData(true)
                    setLoading(false)
                }
                console.log(data)
                setDescription(data.data.descricao),
                    setName(data.data.nome)
            })
    }



    console.log(name, description)
    return (
        <section className="newsletter section">
            <div className="container newletter_container">
                <div className="grid newsletter_content">
                    <img
                        src="image/newsletter-sushi.png"
                        alt="newsletter image"
                        className="newsletter_img"
                    />
                    {responseData ? (

                        <div>Hello</div>
                    ) :
                        (
                            <div className="newsletter_data">
                                <h2 className="section_title">
                                    {t("Search for a product")}
                                </h2>

                                <form action="" className="newsletter_form">
                                    <input
                                        type="text"
                                        className="newsletter_input"
                                        placeholder={t("Search for a product")}
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                    />
                                    <button className="button newsletter_button" onClick={onSubmit}>
                                        {t("Search")}
                                        <HiSearch size={16} />
                                    </button>
                                </form>
                            </div>
                        )
                    }


                </div>
            </div>
        </section >
    )
}

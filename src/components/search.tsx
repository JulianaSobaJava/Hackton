import { HiSearch } from "react-icons/hi"
import { FormEvent, useContext, useState } from "react"
import { api } from "../utils/service"
import { t } from "i18next"
import { Oval } from 'react-loader-spinner'
import { LangContext } from "../hook/useContext"

export default function Search() {
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const {selectedValue} = useContext(LangContext) ?? {};
    const [description, setDescription] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [responseData, setResponseData] = useState<boolean>(false)


    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        setLoading(true)
        api.post("/search", { destino: selectedValue, originalText: text })
            .then(data => {
                if (data.status === 200) {
                    setResponseData(true);
                    setLoading(false)
                }
                setDescription(data.data.resposta.descricao);
                    setName(data.data.resposta.nome)
            }).catch((error)=>{
  console.log(error)
            })
    }

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

                         <div>
                        <p style={{fontSize:'32px'}}>{name}</p>
                        <p style={{fontSize:'10px'}}>{description}</p>
                        </div>
                    ) :
                        (
                            loading ? 
                            (
                                <div style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>

                            <p className="section_title">{t("Loading Data...")}</p>
                            
                            <Oval    height={60}
                            width={60}
                            color="hsl(19, 64%, 52%)"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="hsl(19, 64%, 52%)"
                            strokeWidth={2}
                            strokeWidthSecondary={2}/>
                            </div>
                            )
                            :
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
                                    <button className="button newsletter_button" onClick={(e)=>onSubmit(e)}>
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

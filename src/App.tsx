import { useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import Footer from './components/footer'
import Banner from './components/banner'
import { languageOption } from './utils/languageOptions'
import Search from './components/search'
import { LanguageOption, LanguageOptionProps, OptionLang } from './utils/type'
import Header from './components/header'


function App() {

  const options = [
    {
      flag: "./flags/image 1.svg",
      lang: "Português",
      value:'pt'
    },
    {
      flag: "./flags/image 4.svg",
      lang: "Francês",
      value:'fr'
    },
    {
      flag: "./flags/image 3.svg",
      lang: "Inglês",
      value:'en'
    },
    {
      flag: "./flags/image 2.svg",
      lang: "Suaili",
      value:'sl'
    },
  ];
  

  const {i18n} = useTranslation()
  const [country, setCountry] = useState(null);
  const [error, setError] = useState<string>('');
  const [currentCountryOption, setCurrentCountryOption] = useState<LanguageOption>()

  useEffect(() => {
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {

            const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
            const response = await fetch(url);
            const data = await response.json();
            setCountry(data.address.country);
          } catch (error) {
            setError('Erro ao obter a localização do usuário');
          }
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocalização não suportada pelo navegador');
    }
  },[]);


  useEffect(() => {
    
     const currentCountry = languageOption.filter(App=>App.name==country ? country : "Tanzania")
     

     console.log(currentCountry, country)

     currentCountry[0]   ? i18n.changeLanguage(currentCountry[0].value) : i18n.changeLanguage("en")
  },[])

  return (
    <main >
        <Header option={options as OptionLang[]} />
        <Banner/>
        <Search/>
        <Footer/>   
    </main>
  )
}

export default App

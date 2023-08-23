import React, { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languageOption } from '../utils/languageOptions';
import { LanguageOption, OptionLang } from '../utils/type';

export interface SharedDataContextValue {
    country?: string | undefined,
    error?: string,
    currentCountryOption?: LanguageOption,
    options: OptionLang[],
    selected:string,
    selectedFlag:string,
    setSelectedFlag:(newFlag:string)=>void,
    setSelected:(newSeleted:string)=>void,
    selectedValue:string,
    setSelectedValue:(newFlag:string)=>void,
}

export const LangContext = createContext<SharedDataContextValue | undefined>(undefined);


const options = [
    {
        flag: "./flags/image 1.svg",
        lang: "Português",
        value: 'pt'
    },
    {
        flag: "./flags/image 4.svg",
        lang: "Francês",
        value: 'fr'
    },
    {
        flag: "./flags/image 3.svg",
        lang: "Inglês",
        value: 'en'
    },
 
];

const useWatchStateChange = (state: any, callback: () => void) => {
    useEffect(() => {
        callback();
    }, [state]);
};

export const LangProvider = ({ children }: { children: React.ReactNode }) => {

    const { i18n } = useTranslation()
    const [country, setCountry] = useState<string>();
    const [error, setError] = useState<string>('');
    const [currentCountryOption, setCurrentCountryOption] = useState<LanguageOption>();
    const [optionsSeleted, setOptionsSeleted] = useState<OptionLang>()
    const [selected, setSelected] = useState<string>("");
    const [selectedFlag, setSelectedFlag] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<string>("");



    const changeLanguageAndCountry = (newSelected: string) => {
        const selectedOption = options?.find(option => option.lang === newSelected);

        if (selectedOption) {
            const selectedCountry = languageOption.find(option => option.value === selectedOption.value);
            setCurrentCountryOption(selectedCountry);

            setSelectedValue(selectedOption.value)
            setSelected(newSelected);
            setSelectedFlag(selectedOption.flag);

            console.log("Mudou")

            if (selectedCountry) {
                i18n.changeLanguage(selectedCountry.value);
            } else {
                i18n.changeLanguage("en");
            }
        }
    };


    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {

                        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
                        const response = await fetch(url);
                        const data = await response.json();
                        setCountry(data?.address.country);
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
    }, []);

    useEffect(() => {
        if (country) {
            const currentCountry = languageOption.filter(App => App.name == country ?  country : "Tanzania")
        setCurrentCountryOption(currentCountry[0]);
        }
    }, [country]);

 

    useEffect(() => {
        if(currentCountryOption){
            const optionsSeleted = options?.filter(App => currentCountryOption?.value === App.value);
            if (optionsSeleted[0]) {
                setSelectedValue(optionsSeleted[0].value)
                setSelected(optionsSeleted[0].lang);
                setSelectedFlag(optionsSeleted[0].flag);
            }
        }
    
        if (currentCountryOption) {
            i18n.changeLanguage(currentCountryOption.value);
        } else {
            i18n.changeLanguage(selectedValue);
        }
    }, [currentCountryOption]);


    useWatchStateChange(selected, () => {
        changeLanguageAndCountry(selected)
    });

    useEffect(() => {
        if (currentCountryOption) {
            const optionSeleted = options?.filter(App => currentCountryOption.value === App.value);
            if (optionSeleted[0]) {
                setOptionsSeleted(optionSeleted[0]);
            }
        }
    }, [currentCountryOption, options]);



    console.log(currentCountryOption, optionsSeleted,country,selected,selectedValue,"on context")

    return (
        <LangContext.Provider value={{ country, error, currentCountryOption, options,selected,selectedFlag,setSelectedFlag,setSelected,selectedValue, setSelectedValue}}>
            {children}
        </LangContext.Provider>
    );
};
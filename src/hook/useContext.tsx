import React, { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languageOption } from '../utils/languageOptions';
import { LanguageOption, OptionLang } from '../utils/type';

export interface SharedDataContextValue {
    country?: string | undefined,
    error?: string,
    currentCountryOption?: LanguageOption,
    options: OptionLang[]
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
    {
        flag: "./flags/image 2.svg",
        lang: "Suaili",
        value: 'sl'
    },
];


export const LangProvider = ({ children }: { children: React.ReactNode }) => {

    const { i18n } = useTranslation()
    const [country, setCountry] = useState<string>();
    const [error, setError] = useState<string>('');
    const [currentCountryOption, setCurrentCountryOption] = useState<LanguageOption>();


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

        const currentCountry = languageOption.filter(App => App.name == country ? country : "Tanzania")
        setCurrentCountryOption(currentCountry[0]);

        currentCountry[0] ? i18n.changeLanguage(currentCountry[0].value) : i18n.changeLanguage("en")
    }, [])


    return (
        <LangContext.Provider value={{ country, error, currentCountryOption, options }}>
            {children}
        </LangContext.Provider>
    );
};
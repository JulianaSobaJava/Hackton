export type OptionLang ={
    value:string,
    flag:string,
    lang:string
  }

  
  export interface HeaderProps{
    option: OptionLang[];
    currentCountry?: LanguageOption[];
  }
  export type LanguageOption ={
    name: string;
    value: string;
}
  

export interface LanguageOptionProps{
  currentCountry: LanguageOption[];
}
    
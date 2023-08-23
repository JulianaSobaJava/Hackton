import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import enJson from './translation/en.json'
import frJson from './translation/fr.json'
import ptJson from './translation/pt.json'
import swJson from './translation/sw.json'

i18n.use(initReactI18next).init({
  fallbackLng:"en",
  interpolation:{
    escapeValue:false
  },
  resources:{
    en: enJson,
    fr:frJson,
    pt:ptJson,
    sw:swJson,
  }
})

export default i18n;
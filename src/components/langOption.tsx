import { useState} from "react";
import { HeaderProps, OptionLang } from "../utils/type";



export default function LangSelection({option, currentCountry}:HeaderProps) {
  const [options, setOptions] = useState<OptionLang[]>(option) 
  const [selected, setSelected] = useState(options[0].lang);
  const [selectedFlag, setSelectedFlag] = useState(options[0].flag);
  const [isActive, setIsActive] = useState(false);
  const [elementSelected, setelementSelected] = useState<
  OptionLang | undefined
  >();


  console.log(options, "option lang");

  const handleSelect = (option: OptionLang) => {
    setelementSelected(option);
    setIsActive(false);
    setSelected(option.lang);
    setSelectedFlag(option.flag);
  };

  return (
    <div className="langOptions">
      <div className="langContent">
        <div
          className="langContainer"
          onClick={(e) => setIsActive(!isActive)}
        >
          {selected !== "" ? (
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:6}}>
              <img
                src={selectedFlag}
                alt=""
                style={{height:'10px', width:'10px', objectFit:'contain'}}
              />
              <p style={{fontSize:'12px', color:'#9C9898'}}> {selected}</p>
            </div>
          ) : (
            <>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:4}}>
                <img
                  src={elementSelected?.flag}
                  alt=""
                  style={{height:'10px', width:'10px', objectFit:'contain'}}
                />
                <p style={{fontSize:'12px', color:'#9C9898'}}>{elementSelected?.lang}</p>
              </div>
            </>
          )}
        </div>
        {isActive && (
          <div className="langDrop">
            {options.map((option) => (
              <div
                key={option.lang}
                onClick={(e) => {
                  handleSelect(option);
                }}
                style={{marginTop:'2px', display:'flex', gap:3, alignItems:'center', cursor:'pointer'}}
              >
                <img
                  src={option.flag}
                  alt="flag"
                  style={{height:'10px', width:'10px', objectFit:'contain'}}
                />
                <p style={{fontSize:'12px', color:'#9C9898'}}>{option.lang}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

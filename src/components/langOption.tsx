import { useContext, useState } from "react";
import { LangContext } from '../hook/useContext';
import { OptionLang } from "../utils/type";



export default function LangSelection() {

    const { options, selected, setSelected, setSelectedFlag, selectedFlag } = useContext(LangContext) ?? {};
    const [isActive, setIsActive] = useState(false);
    const [elementSelected, setelementSelected] = useState<
        OptionLang | undefined
    >();


    const handleSelect = (option: OptionLang) => {
        setelementSelected(option);
        setIsActive(false);
        if(setSelected && setSelectedFlag){
            setSelected(option.lang as string);
            setSelectedFlag(option.flag);
        }
     
    };

    

    return (
        <div className="langOptions">
            <div className="langContent">
                <div
                    className="langContainer"
                    onClick={() => setIsActive(!isActive)}
                >
                    {selected !== "" ? (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6 }}>
                            <img
                                src={selectedFlag}
                                alt=""
                                style={{ height: '10px', width: '10px', objectFit: 'contain' }}
                            />
                            <p style={{ fontSize: '12px', color: '#9C9898' }}> {selected}</p>
                        </div>
                    ) : (
                        <>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
                                <img
                                    src={elementSelected?.flag}
                                    alt=""
                                    style={{ height: '10px', width: '10px', objectFit: 'contain' }}
                                />
                                <p style={{ fontSize: '12px', color: '#9C9898' }}>{elementSelected?.lang}</p>
                            </div>
                        </>
                    )}
                </div>
                {isActive && (
                    <div className="langDrop">
                        {options?.map((option) => (
                            <div
                                key={option.lang}
                                onClick={() => {
                                    handleSelect(option);
                                }}
                                style={{ marginTop: '2px', display: 'flex', gap: 3, alignItems: 'center', cursor: 'pointer' }}
                            >
                                <img
                                    src={option.flag}
                                    alt="flag"
                                    style={{ height: '10px', width: '10px', objectFit: 'contain' }}
                                />
                                <p style={{ fontSize: '12px', color: '#9C9898' }}>{option.lang}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

import React, { useState } from 'react';

import { i18n } from './translate/i18n';
import  'bootstrap/dist/css/bootstrap.min.css' ;

const I18N_STORE_KEY = 'i18nextLng'
const cars = [{title2: "PT"},{title2: "EN"},{title2: "ES"}];

const MultiLanguage = () => {
    const [language] = useState(localStorage.getItem(I18N_STORE_KEY))
    const [carTitle, setCarTitle] = useState(cars[0].title2);
    
    const handleSelectChance = (event) => {
        localStorage.setItem(I18N_STORE_KEY, event.target.value)
        console.log(event.target.value)
        console.log(event)
        window.location = window.location;
    }
    ////
    

    const handleChange = ({ target }) => {
        const index = target.options.selectedIndex;
        const { title2 } = cars[index];
        setCarTitle(title2);
    }
      ///
    return(
        <>
            <h1>{i18n.t('titles.app')}</h1>
            <p>{i18n.t('messages.itWorks')}</p>
            <button>{i18n.t('buttons.save')}</button><br /><br />
            <small>{i18n.t('messages.smallText')}</small><br /><br />
            
            <select onChange={handleSelectChance} value={language}>
                <option>Selecione um idioma</option>
                <option value="pt-BR">PT</option>
                <option value="en-US">EN</option>
            </select>

            <div className="container text-center">
            <h1 className="mt-4 mb-4">{carTitle}</h1>
                <select
                style={{height:'60px', width:'80px'}}
                    onChange={handleSelectChance}
                    value={language}
                    id="variation-select"
                >
                    {cars.map(({title2, title }) => (
                    <option className='option-hoje' style={{height:'90px', width:'80px', background:'red'}} key={title} value='en-Us'>{title2}</option>
                    ))}
                </select>
            </div>

        </>

    );
}
export default MultiLanguage;

//yarn add i18next-browser-languagedetector
//yarn add i18next

// import React from "react";
// import "./styles.css";

// const cars = [
//   {
//     title2: "PT",
//   },
//   {
//     title2: "EN",
//   },
//   {
//     title2: "ES",
//   }
// ];

// export default function App() {
//   const [carTitle, setCarTitle] = useState(cars[0].title2);

//   const handleChange = ({ target }) => {
//     const index = target.options.selectedIndex;
//     const { title2 } = cars[index];

//     setCarTitle(title2);
//   };

// //   return (
// //     <div className="container text-center">
// //       <select
// //         className="d-block w-50 mt-4 mx-auto"
// //         onChange={handleChange}
// //         value={carTitle}
// //         id="variation-select"
// //       >
// //         {cars.map(({ title2, title }) => (
// //           <option key={title} value={title}>
// //             {title2}
// //           </option>
// //         ))}
// //       </select>
// //     </div>
// //   );
// }

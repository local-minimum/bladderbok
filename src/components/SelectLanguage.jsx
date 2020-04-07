import React from 'react';
import imgLangSv from './png/sv/svenska_ikon.png';
import imgLangEn from './png/en/engelska_ikon.png';
import imgCloseSv from './png/sv/bokikon_sve.png';
import imgCloseEn from './png/en/bokikon_eng.png';

const languageStyle = {
    position: 'fixed',
    top: 0,
    right: '2%',
    padding: '10px 10px 2px 10px',
    maxWidth: '90%',
}

const activeLanguageStyle = {
    color: '#555',
    cursor: 'pointer',
    height: '2em',
    padding: '0.1em',
    marginBottom: '0.2em',
}

const otherLanguageStyle = {
    color: '#222',
    cursor: 'pointer',
    height: '2em',
    padding: '0.1em',
    marginBottom: '0.2em',
}

const closeBook = {
    sv: {
        src: imgCloseSv,
        alt: "Stäng boken"
    },
    en: {
        src: imgCloseEn,
        alt: "Close the book",
    },
}

export default function SelectLanguage({ onSelectLanguage, onCloseBook, language }) {
    return (
        <div style={languageStyle}>
            <img 
                onClick={() => onSelectLanguage('sv')}
                style={language === 'sv' ? activeLanguageStyle : otherLanguageStyle}
                src={imgLangSv}
                alt="Svenska"
            />
            <img
                onClick={() => onSelectLanguage('en')}
                style={language === 'en' ? activeLanguageStyle : otherLanguageStyle}
                src={imgLangEn}
                alt="English"
            />
            <img
                onClick={onCloseBook}
                style={otherLanguageStyle}
                {...closeBook[language]}
            />
        </div>
    );
}
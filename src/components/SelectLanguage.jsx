import React from 'react';
import imgLangSv from './png/sv/svenska_ikon.png';
import imgLangEn from './png/en/engelska_ikon.png';
import imgCloseSv from './png/sv/start.png';
import imgCloseEn from './png/en/start.png';

const languageStyle = {
    position: 'fixed',
    top: 0,
    right: '2%',
    padding: '10px 10px 2px 10px',
    maxWidth: '90%',
}

const activeLanguageStyle = {
    cursor: 'pointer',
    height: '2em',
    padding: '0.1em',
    marginBottom: '0.2em',
}

const otherLanguageStyle = {
    cursor: 'pointer',
    height: '2em',
    padding: '0.1em',
    marginBottom: '0.2em',
}

const closeBookStyle = {
    cursor: 'pointer',
    height: '2em',
    padding: '0.1em',
    marginBottom: '0.2em',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block',
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

export default function SelectLanguage({ onSelectLanguage, onCloseBook, language, showClose }) {
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
            {showClose && <img
                onClick={onCloseBook}
                style={closeBookStyle}
                alt=""
                {...closeBook[language]}
            />}
        </div>
    );
}
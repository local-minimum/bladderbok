import React from 'react';

const languageStyle = {
    position: 'fixed',
    top: 0,
    right: '2%',
    padding: '10px 10px 2px 10px',
    fontSize: 'small',
    background: '#ff9f00',
    maxWidth: '90%',
    lineHeight: 0.4,
    fontFamily: 'arial',
}

const activeLanguageStyle = {
    color: '#555',
    cursor: 'pointer',
    height: '1.5em',
    padding: '0.1em',
    marginBottom: '0.2em',
}

const otherLanguageStyle = {
    color: '#222',
    cursor: 'pointer',
    height: '1.5em',
    padding: '0.1em',
    marginBottom: '0.2em',
}

const closeBook = {
    sv: 'Stäng boken',
    en: 'Close the book',
}

export default function SelectLanguage({ onSelectLanguage, onCloseBook, language }) {
    return (
        <div style={languageStyle}>
            <div onClick={() => onSelectLanguage('sv')} style={language === 'sv' ? activeLanguageStyle : otherLanguageStyle}>
                Svenska
            </div>
            <div onClick={() => onSelectLanguage('en')} style={language === 'en' ? activeLanguageStyle : otherLanguageStyle}>
                English 
            </div>
            <div onClick={onCloseBook} style={otherLanguageStyle}>
                {closeBook[language]}
            </div>
        </div>
    );
}
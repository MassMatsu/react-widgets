import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'https://translation.googleapis.com/language/translate/v2';

const Convert = ({ text, language }) => {
  const [debouncedText, setdebouncedText] = useState(text);
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setdebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const requestTranslation = async () => {
      const response = await axios.post(
        baseURL,
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslated(response.data.data.translations[0].translatedText);
    };

    requestTranslation();
  }, [language, debouncedText]);

  return (
    <div className='ui segment'>
      <h1 className='ui header'>{translated}</h1>
    </div>
  );
};

export default Convert;

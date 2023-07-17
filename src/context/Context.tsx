import React, { ReactNode, useState } from 'react';
import { pronouns } from '../data/pronouns';

const pronounsRegex = new RegExp(`\\b(${pronouns.join('|')})\\b`, 'gmi');

// interface contextType {
//   avgReadingTime: number;
//   longestWord: string;
//   count: {
//     words: number;
//     chars: number;
//     sentences: number;
//     paragraphs: number;
//     pronouns: number;
//   };
// }

interface ProviderPropsType {
  // value: contextType;
  children: ReactNode;
}

const appContext = React.createContext({
  avgReadingTime: 0,
  longestWord: '',
  count: {
    words: 0,
    chars: 0,
    sentences: 0,
    paragraphs: 0,
    pronouns: 0,
  },
  countInput: (textInput: string) => {},
});

const ContextProvider = (props: ProviderPropsType) => {
  const countInput = (textInput: string) => {
    const words = textInput.trim().match(/[\w'-]+/gm);
    const wordsCount = words?.length;
    const charsCount = textInput.trim().length;
    const paragraphCount = textInput.trim().match(/(?:[^\r\n]|\r(?!\n))+/gm)?.length;
    const sentenceCount = textInput.trim().match(/[^ \r\n][^!?.\r\n]+[\w!?.]+/gm)?.length;
    const pronounCount = textInput.trim().match(pronounsRegex)?.length;

    const longest = words?.reduce((lng, word) => {
      if (word.length > lng.length) return word;
      else return lng;
    }, '');

    const readingTime = Math.ceil((wordsCount ? wordsCount : 0) / 225);
    setData({
      ...data,
      avgReadingTime: readingTime,
      longestWord: longest ? longest : '',
      count: {
        words: wordsCount ? wordsCount : 0,
        chars: charsCount ? charsCount : 0,
        sentences: sentenceCount ? sentenceCount : 0,
        paragraphs: paragraphCount ? paragraphCount : 0,
        pronouns: pronounCount ? pronounCount : 0,
      },
    });
  };

  const [data, setData] = useState({
    avgReadingTime: 0,
    longestWord: '',
    count: {
      words: 0,
      chars: 0,
      sentences: 0,
      paragraphs: 0,
      pronouns: 0,
    },
    countInput,
  });
  return <appContext.Provider value={data}>{props.children}</appContext.Provider>;
};

export default appContext;
export { ContextProvider };

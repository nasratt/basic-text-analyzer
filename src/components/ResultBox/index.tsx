import { useContext } from 'react';
import './index.scss';
import appContext from '../../context/Context';

const ResultBox = () => {
  const context = useContext(appContext);

  const resultBar = [
    {
      title: 'Words',
      value: context.count.words,
    },
    {
      title: 'Characters',
      value: context.count.chars,
    },
    {
      title: 'Sentences',
      value: context.count.sentences,
    },
    {
      title: 'Paragraphs ',
      value: context.count.paragraphs,
    },
    {
      title: 'Pronouns',
      value: context.count.pronouns,
    },
  ];

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default ResultBox;

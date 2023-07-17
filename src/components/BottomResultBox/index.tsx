import { useContext } from 'react';
import './index.scss';
import appContext from '../../context/Context';

const BottomResultBox = () => {
  const context = useContext(appContext);

  const art = context.avgReadingTime ? `~ ${context.avgReadingTime} min` : '-';

  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: art,
    },
    {
      title: 'Longest word:',
      value: context.longestWord,
    },
  ];

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomResultBox;

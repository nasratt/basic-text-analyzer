import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import './index.scss';
import appContext from '../../context/Context';

const TextArea = () => {
  const [textInput, setTextInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current !== null) textareaRef.current.focus();
  }, []);

  const context = useContext(appContext);

  useEffect(() => {
    console.log('effect run!');
    let timer = setTimeout(() => {
      context.countInput(textInput);
    }, 500);

    return () => clearTimeout(timer);
  }, [textInput]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
    // context.countInput(e.target.value);
  };

  return (
    <textarea
      className="text-area"
      placeholder="Paste your text here..."
      value={textInput}
      ref={textareaRef}
      onChange={handleChange}
    />
  );
};

export default TextArea;

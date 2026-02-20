import { useState, useEffect } from 'react';
import './DataInput.css';

const DataInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [savedData, setSavedData] = useState('');

  // Load state from localStorage when the component mounts
  useEffect(() => {
    const data = localStorage.getItem('myData');
    if (data) {
      setSavedData(data);
    }
  }, []);

  const handleSave = () => {
    if (inputValue.trim() === '')
      return;

    // Save to localStorage
    localStorage.setItem('myData', inputValue);
    setSavedData(inputValue);
    setInputValue(''); // Clear input after saving
  };

  const handleClear = () => {
    localStorage.removeItem('myData');
    setSavedData('');
  };

  return (
    <div className="data-input-container">
      <h2 className="data-input-title">Local Storage Explorer</h2>

      <div className="input-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter content to save..."
          className="data-input-field"
        />
      </div>

      <div className="button-group">
        <button className="btn-save" onClick={handleSave}>
          Save Data
        </button>
        <button className="btn-clear" onClick={handleClear}>
          Clear Data
        </button>
      </div>

      <div className="result-box">
        <strong>Current saved data: </strong>
        {savedData ? (
          <span className="text-data">{savedData}</span>
        ) : (
          <span className="text-empty">No data available</span>
        )}
      </div>
    </div>
  );
};

export default DataInput;


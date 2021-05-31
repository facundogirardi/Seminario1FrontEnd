import React from 'react';

function MessageBox({ name, placeholder, value, onChange, big }) {
  let handleMessageChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <label id="message-box-label">
      {name}
      <textarea
        className={`message-box ${big ? 'big-box' : '      '}`}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleMessageChange}
      />
    </label>
  );
}

export default MessageBox;

import React, { useState } from 'react';
import useDebounce from './debounce';

const BuscaEntrada = ({ value, onChange, ...props }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <input
      {...props}
      type="search"
      value={displayValue}
      onChange={handleChange}
    />
  );
};

export default BuscaEntrada;

import React, { FC, useState } from "react";
import "./styles.scss";

const Selector: FC<{
  name: string;
  options: string[];
  placeholder?: string;
}> = ({ name, placeholder = "Select", options }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="wrapper">
      <label htmlFor={name}>{placeholder}:</label>
      <select
        value={value}
        className="select"
        name={name}
        id={name}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option
            defaultValue={option}
            key={`${Math.random() * 1000}-${option}`}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;

import React, { FC, useContext, useEffect, useState } from "react";
import { FiltersContext } from "../../../context/Filters";
import "./styles.scss";

const Selector: FC<{
  name: string;
  options: string[];
  placeholder?: string;
}> = ({ name, placeholder = "Select", options }) => {
  const [value, setValue] = useState("");
  const { filters, setFilters } = useContext(FiltersContext);

  useEffect(() => {
    if (filters && Object.keys(filters).length === 0) {
      setValue("");
    }
  }, [filters]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="wrapper">
      <label htmlFor={name}>{placeholder.split(" ")[1]}:</label>
      <select
        value={value}
        className="select"
        name={name}
        id={name}
        onChange={handleChange}
      >
        <option value="" hidden disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option defaultValue={option} key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;

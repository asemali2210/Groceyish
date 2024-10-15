
import '@/styles/components/custom-select.scss';
import { useState} from 'react'
import Select from 'react-select';


export default function CustomSelect({options}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: '10px',
      borderRadius: '10px',  // border-radius for select box
      border: '2px solid #333',
      backgroundColor: '#f5f5f5',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '10px',  // border-radius for dropdown menu
    }),
    option: (provided, state) => ({
      ...provided,
      borderRadius: '5px',   // border-radius for options
      backgroundColor: state.isSelected ? '#007bff' : '#fff',
      color: state.isSelected ? '#fff' : '#333',
      padding: 10,
      cursor: 'pointer',
    }),
  };


  return (
    <Select 
      value={selectedOption} 
      onChange={handleChange} 
      options={options}
      styles={customStyles}
      />
  )
};
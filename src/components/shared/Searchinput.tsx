import { Search } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Suggestions for search
const suggestions = [
  { id: 1, name: "Cash Flow" },
  { id: 2, name: "trade finance" },
  { id: 3, name: "customs clearance" },
  { id: 4, name: "FTWZ Services" },
  { id: 5, name: "Insurance" }
];
// Custom hook for debouncing
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Searchinput = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [activeSuggestion, setActiveSuggestion] = useState(null); // State for active suggestion
  const [preventScroll, setPreventScroll] = useState(false); // State to prevent scrolling on backspace/delete

  const debouncedInputValue = useDebounce(inputValue, 600); // Debounce input changes

  const handleInputChange = (event) => {
    const { value } = event.target;

    // Check if the key pressed was Backspace or Delete and set the preventScroll flag
    if (event.nativeEvent.inputType === 'deleteContentBackward') {
      setPreventScroll(true);
    } else {
      setPreventScroll(false);
    }

    setInputValue(value); // Update input value
    setActiveSuggestion(null); // Reset active suggestion when input changes
  };

  useEffect(() => {
    if (!debouncedInputValue) {
      onChange(''); // Pass empty string to display all results
    } else if (!preventScroll) {
      onChange(debouncedInputValue); // Pass the debounced value to the onChange handler

      // Only scroll if there is input and preventScroll is false
      const faqsSection = document.getElementById("faqs");
      if (faqsSection) {
        faqsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [debouncedInputValue, preventScroll, onChange]);

  const handleSuggestionClick = (name) => {
    setInputValue(name); // Update search input with the suggestion
    onChange(name); // Update onChange with the suggestion
    const faqsSection = document.getElementById("faqs");
    if (faqsSection) {
      faqsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSuggestion(name); // Set the active suggestion
  };

  return (
    <div className='md:mx-auto mx-4'>
      <div className='relative  mt-4 md:mt-10'>
        <span className='absolute top-[20%] md:top-[25%] left-5'>
          <Search size={25} color="black" />
        </span>
        <input
          type="text"
          className='bg-white rounded-3xl items-center w-full lg:w-[800px] py-2.5 md:py-4 pl-[55px] text-base'
          value={inputValue} // Set the input value
          onChange={handleInputChange} // Use the new handler
          placeholder="Search for articles, FAQs..."
        />
      </div>
      <div className='flex items-center gap-x-1 flex-wrap justify-start md:justify-center text-white mt-4'>
        <p className='text-white font-[400] text-base m-2  py-1'>Top Searches:</p>
        {suggestions.map((s) => (
          <p
            key={s.id}
            onClick={() => handleSuggestionClick(s.name)} // Use the new click handler
            className={`border-2 border-secondary rounded-full px-2 md:px-3 py-1 text-sm md:text-base cursor-pointer transition-colors duration-200 m-1 my-2
              ${activeSuggestion === s.name ? 'bg-gray-300 text-black' : 'bg-purple-500/70'}`} // Highlight active suggestion
          >
            {s.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Searchinput;

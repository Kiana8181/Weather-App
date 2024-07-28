import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useWeatherQueryStore from "./store";
import { InputStyle } from "./common/InputStyle";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useWeatherQueryStore((state) => state.setCity);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current) {
      setSearchText(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="#929292" />
        </InputLeftElement>
        <Input
          ref={inputRef}
          sx={InputStyle(false)}
          type="text"
          placeholder="Search for your preferred city..."
        />
      </InputGroup>
      {/* This hidden button is required for form submission */}
      <Button type="submit" display="none" />
    </form>
  );
};

export default SearchInput;

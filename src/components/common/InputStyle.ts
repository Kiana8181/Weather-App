const InputStyle = (error: boolean) => {
  return {
    color: "#929292",
    border: error ? "2px solid #FF7B7B" : "1px solid #444444",
    borderRadius: "100px",
    bg: "#444444",
    _focus: {
      border: error ? "2px solid #FF7B7B" : "1px solid #868686",
      boxShadow: error ? "none" : "0 0 0 1px #868686",
    },
    _hover: { border: error ? "2px solid #FF7B7B" : "1px solid #868686" },
  };
};

export { InputStyle };

import { useState } from "react";


function AddCategory({setCategories}) {
  const [inputValue, setInputValue] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    setCategories( cats =>[inputValue,...cats])
    setInputValue("")
    console.log("Sumbit Hecho");
  };
  return (
    <>
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      ></input>
    </form>
    
    </>
  );
}

export default AddCategory;

import {useState} from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";


function GifExpertApp() {
  const [categories, setCategories] = useState(["One piece"]);
  

  return (
    <>
      <h2>GifExpertApp</h2>
      
       <AddCategory setCategories={setCategories} /> 
      <hr />
      
         {categories.map((category) => ( 
          <GifGrid key={category} category={category}/>
         ))} 
      
    </>
  );
}

export default GifExpertApp;

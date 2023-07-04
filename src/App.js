import React,{useState} from "react";
import ToDoList from "./ToDoList";

function App(){
  const [inputText,setinputText]=useState("");
  const [items,setItems]=useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setinputText(newValue);
  }
  function addItem(){
    setItems(prevItems=>{
      return[...prevItems,inputText];
    });
    setinputText("");
  }
  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !==   id;
      });
    });
  }
  return(
    <div className="container">      
        <h1> To-Do List</h1>    
      <div className="form">  
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}> <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
       { items.map((todoItem,index)=>( <ToDoList key={index} id={index} text={todoItem}
        onChecked={deleteItem}
       />
       )) }
         
        </ul>
      </div>
    </div>
  );
}
export default App;

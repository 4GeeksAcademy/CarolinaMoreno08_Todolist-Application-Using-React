import React, {useState} from "react";

const Todolist = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    //Add into an array --> concat
    //Delete from array --> filter
    //Update --> map

    function MouseOver(event) {
        event.target.style.opacity=0;
      }
      function MouseOut(event){
        event.target.style.opacity=3;
      }


    return(
        <div className="container">
            <h1 className="text-center">todos{inputValue}</h1>
            <ul className="new-list">
                <div className="container">
                    {/* <input type="text" onChange={(e)=>setInputValue(e.target.value)} value ={inputValue}  placeholder="What needs to be done?" onKeyDown={(e)=> {if (e.key == "Enter"){setTodos(todos.concat([inputValue])); setInputValue("")}}}/> */}
                    <input type="text" 
                    onChange={(e)=>setInputValue(e.target.value)} 
                    value ={inputValue}  placeholder="What needs to be done?" 
                    onKeyDown={(e)=> {if (e.key == "Enter"){setTodos(todos.concat([inputValue])); setInputValue("")}}}/>
                </div>
                {todos.map((item, index) => <div>{item}<button type="button" class="btn-close" aria-label="Close" onClick={()=> setTodos(todos.filter((t, currentIndex) => index != currentIndex))} onMouseOver={MouseOver} onMouseOut={MouseOut}></button></div> )}
            </ul>
            <div>{todos.length} items left</div>
        </div>
    );
};

export default Todolist

//line 19 without remove/delete the items from the list (before filtering) --> {todos.map((t) => <div>{t}<button type="button" class="btn-close" aria-label="Close"></button></div> )}
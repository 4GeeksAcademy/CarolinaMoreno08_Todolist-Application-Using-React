import React, {useState} from "react";

const Todolist = () => {

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

            function saveChanges(e){
                setInputValue(e.target.value);
            }

            function saveItems(e){
                if (e.key == "Enter"){
                    setTodos(todos.concat([inputValue])); 
                    setInputValue("")
                }
            }

            function deleteItems(idIndex){
                let newItemsList = todos.filter((task, index) => idIndex != index)
                setTodos(newItemsList)
            }

    //Add into an array --> concat
    //Delete from array --> filter
    //Update --> map



    return(
        <div className="container">
            <h1 className="text-center">todos</h1>
            <div className="new-list">
                <div className="container">
                    <input type="text" 
                    onChange={saveChanges} 
                    value ={inputValue}  placeholder="What needs to be done?" 
                    onKeyDown={saveItems}/>
                </div>
                {todos.map((item, idIndex) => {
                    return (
                        <div className="task">
                        {item}
                        <span className="delete-icon"
                            onClick={() => deleteItems(idIndex)}>
                        X </span>
                        </div>
                    )
                })}
            </div>
            <div className="items-left">{todos.length} items left</div>
        </div>
    );
};

export default Todolist

//line 19 without remove/delete the items from the list (before filtering) --> {todos.map((t) => <div>{t}<button type="button" class="btn-close" aria-label="Close"></button></div> )}

// the code was like this before to create the functions (saveChanges & saveTasks):
{/* <input type="text" 
                    onChange={(e)=>setInputValue(e.target.value)} 
                    value ={inputValue}  placeholder="What needs to be done?" 
                    onKeyDown={(e)=> {if (e.key == "Enter"){setTodos(todos.concat([inputValue])); setInputValue("")}}}/> */}

{/* 
//the code was like this before to create the function: deleteItems.

{todos.map((item, index) => <div>{item}<button type="button" class="btn-close" aria-label="Close" onClick={()=> setTodos(todos.filter((t, currentIndex) => index != currentIndex))} ></button></div> )} */}



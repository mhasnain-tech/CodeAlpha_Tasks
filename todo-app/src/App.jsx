import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(false);

  // console.log(todos);
  // console.log(editTodo);

  const addHandler = () => {
    if (!input.trim()) {
      return alert("Chal ponke kahan");
    }

    const todoDataCreate = {
      id: Date.now(),
      title: input,
    };
    setTodos((prev) => [...prev, todoDataCreate]);
    setInput("");



    if (editTodo) {
      let editTodos = todos.map((edititem) =>
        edititem.id == editTodo ? { ...edititem, title: input } : edititem,
      );
      // console.log(editTodos);
      setTodos(editTodos);
      setInput("");
      setEditTodo(null);
  
      // return;
    }

    // console.log(todoDataCreate);
  };

  const editHandler = (data) => {
    // console.log(data.id);
    let editItemIn = todos.find((dataa) => dataa.id === data.id);
    setInput(editItemIn.title);
    setEditTodo(editItemIn.id);
  };

  const deleteHandler = (data) => {

  const deleteTodo = todos.filter((item) => item.id !== data.id );
   setTodos(deleteTodo);
   setInput("")
   setEditTodo(null)

  }

  return (
    <>
      <div className="h-[100vh] bg-blue-900 flex justify-center items-center flex-col gap-4">
        <h1 className="text-white text-3xl">To-do Application</h1>
        <div className="bg-white w-[400px] rounded shadow-2xl p-1">
          <div className="p-1 flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Add Your Task"
              className="border w-[100%] pl-2 h-[35px] rounded outline-none"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button
              className="border w-[20%] h-[35px] rounded"
              onClick={() => addHandler()}
            >
              {editTodo ? "Update" : "Add"}
            </button>
          </div>
          {/* Todos  */}
          <div className=" p-1 rounded">
            {todos.length > 0 ? (
              todos.map((item) => (
                <TodoItem data={item} key={item.id} editHandler={editHandler} deleteHandler={deleteHandler}/>
              ))
            ) : (
              <p className=" text-center text-yellow-600">No Tasks Yet!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

const TodoItem = ({ data, editHandler , deleteHandler }) => {
  return (
    <div className="flex bg-red-400 justify-between items-center w-[100%] mb-2 h-[40px] rounded p-2">
      <p className="text-white">{data.title}</p>
      <div className="flex gap-2">
        <button className="text-green-600" onClick={() => editHandler(data)}>
          Edit
        </button>
        <button className="text-red-600" onClick={() => deleteHandler(data)}>Delete</button>
      </div>
    </div>
  );
};

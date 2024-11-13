import { useState } from "react";

const Main = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [todoArr, settodoArr] = useState([]);

  const AddTodo = () => {
    let todoObj = {
      title,
      desc,
    };

    if (!todoObj.title || !todoObj.desc) {
      alert("All fields mandatory");
    } else {
      settodoArr([...todoArr, todoObj]);
      settitle("");
      setdesc("");
    }
  };

  const DeleteTodo = (index) => {
    const updatedTodos = todoArr.filter((_, i) => i !== index);
    settodoArr(updatedTodos);
  };

  return (
    <main className="mt-5">
      <div className="w-[30%] m-auto mb-8 shadow-lg p-6 bg-gray-50 rounded-lg">
        <h1 className="text-xl font-extrabold">TodoList</h1>
        <div className="flex flex-col gap-2">
          <input
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="border border-gray-400 rounded py-2 px-8"
            type="text"
            placeholder="Title"
          />
          <input
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            className="border border-gray-400 rounded py-2 px-8"
            type="text"
            placeholder="Description"
          />
        </div>
        <button
          onClick={AddTodo}
          className="m-auto mt-5 block py-2 px-3 text-xl text-white font-medium bg-black rounded"
        >
          Addto
        </button>
      </div>
      <ul className="w-[30%] m-auto">
        {todoArr.map((todo, index) => (
          <li className="mb-5">
            <strong>{todo.title}</strong>
            <p className="mb-1">{todo.desc}</p>
            <button
              onClick={() => DeleteTodo(index)}
              className="py-2 px-3 text-white font-medium rounded bg-black"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;

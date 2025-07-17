import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescripition] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescripition(event.target.value)}
      />
      <button
        onClick={() => onAddTaskSubmit(title, description)}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;

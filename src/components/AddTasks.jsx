import { useState } from "react";
import Input from "./Input";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescripition] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescripition(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Preencha o título e a descrição da tarefa!");
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescripition("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;

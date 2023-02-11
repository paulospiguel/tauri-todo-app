import { useState } from "react";

interface ITask {
  id: string;
  name: string;
  createdAt: Date;
  completed: boolean;
}

function App() {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState<ITask[]>([]);

  const handleAdd = () => {
    if (!name) return;

    const toAdd = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date(),
      completed: false,
    };

    setList((prevState) => [...prevState, toAdd]);
    setName("");
  };

  const handleRemove = (id: string) => {
    setList((prevState) => prevState.filter((item, i) => item?.id !== id));
  };

  return (
    <div className="bg-gray-800 min-h-[100vh] flex-col flex">
      <header className="pt-6 ">
        <h1 className="text-2xl text-center text-green-500 font-bold">
          My App TODO List
        </h1>
      </header>

      <main className="max-w-5xl mx-auto mt-5 p-5 flex-1 w-full ">
        <div className="flex flex-col gap-2  sm:flex-row mb-5">
          <input
            className="bg-gray-700 h-10 text-white px-2 py-1 rounded-sm w-full"
            type="text"
            placeholder="Entre com a tarefa a ser realizada"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && name && handleAdd()}
          />
          <button
            type="button"
            onClick={handleAdd}
            className="bg-blue-600 h-10 text-gray-50 px-2 rounded-sm hover:bg-blue-500"
          >
            Adicionar
          </button>
        </div>

        <ul className="text-gray-100 space-y-2 py-4 max-h-[70vh] overflow-auto px-4 -mx-4">
          {list?.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between bg-gray-600 p-2 rounded-md "
            >
              <span>{item?.name}</span>
              <span className="ml-auto mr-4 font-semibold">
                {item?.createdAt.toLocaleString("PT")}
              </span>
              <button
                className="hover:text-red-500"
                type="button"
                onClick={() => handleRemove(item?.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </main>

      <footer className="bg-gray-800 p-5 text-center text-gray-50">
        PRSpiguel Tecnologia - Todos os direitos reservados
        <br />
        Desenvolvido por{" "}
        <a
          href="https://www.linkedin.com/in/paulo-spiguel-7b1b3b1b3/"
          target="_blank"
          rel="noopener"
          className="text-blue-500"
        >
          Paulo Spiguel 🇧🇷
        </a>
        <br />
      </footer>
    </div>
  );
}

export default App;

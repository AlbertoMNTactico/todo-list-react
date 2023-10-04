import Todo from "./pages/todo";

function App() {
  return (
    <div className="bg-[#1e4d6d88] text">
      <main className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-4xl">Todo List</h1>
        <Todo></Todo>
      </main>
    </div>
  );
}

export default App;

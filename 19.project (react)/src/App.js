import "./App.css";
import Table from "./Table";

function App() {
  const users = [
    {
      name: "Tayfun",
      surname: "Erbilen",
      email: "tayfunerbilen@gmail.com",
      age: 29,
    },
    {
      name: "Seyit Yahya",
      surname: "Kuru",
      email: "seyityahya05@gmail.com",
      age: 24,
    },
    {
      name: "Mehmet",
      surname: "Seven",
      email: "mseven@gmail.com",
      age: 29,
    },
    {
      name: "Gökhan",
      surname: "Kandemir",
      email: "gökhan@gmail.com",
      age: 35,
    },
  ];
  return (
    <div className="p-4">
      <Table
        head={["Ad Soyad", "E-posta", "Yaş"]}
        body={users.map((user) => [user.name, user.email, user.age])}
      />
    </div>
  );
}

export default App;

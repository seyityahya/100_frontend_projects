import "./App.css";
import { useState } from "react";

function App() {
  const [route, setRoute] = useState({
    route: "",
    stations: [],
  });

  const handleRoute = (e) => {
    setRoute((route) => ({
      ...route,
      route: e.target.value,
    }));
  };

  const addStation = () => {
    setRoute((route) => ({
      ...route,
      stations: [
        ...route.stations,
        {
          name: "",
          lat: "",
          lon: "",
        },
      ],
    }));
  };

  const enabled = route.route;

  return (
    <>
      <input
        type="text"
        value={route.route}
        onChange={handleRoute}
        placeholder="Güzergah"
      />
      <button onClick={addStation}>Yeni Durak Ekle</button>
      <hr />
      {route.stations.map((station) => (
        <div>
          <input type="text" placeholder="Durak Adı" />
          <input type="text" placeholder="Enlem" />
          <input type="text" placeholder="Boylam" />
        </div>
      ))}
      <hr />
      <button disabled={!enabled}>KAYDET</button>
      <br />
      <pre>{JSON.stringify(route, null, 2)}</pre>
    </>
  );
}

export default App;

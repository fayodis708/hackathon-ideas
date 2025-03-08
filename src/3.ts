import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get("https://api.example.com/data");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
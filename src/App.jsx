import { useAuth } from "./AuthContext";
import Entrance from "./Entrance";
import Tablet from "./Tablet.jsx";
import Tunnel from "./Tunnel.jsx";

function App() {
  const { location } = useAuth();
  if (location === "GATE") return <Entrance />;
  if (location === "TABLET") return <Tablet />;
  return <Tunnel />;
}

export default App;

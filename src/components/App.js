import "./App.css";
import { AppBar } from "./AppBar";
import { Layout } from "./Layout";
import { TasksList } from "./TasksList";

function App() {
  return (
    <Layout>
      <AppBar />
      <TasksList />
    </Layout>
  );
}

export default App;

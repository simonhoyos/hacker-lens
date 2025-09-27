import { Layout } from './components/Layout';

function App() {
  return (
    <Layout activeTab="new">
      <>
        <h1 className="text-xl font-semibold">New</h1>
        <p className="text-xs font-normal">
          Discover the latest submissions in the Hacker News community.
        </p>
      </>
    </Layout>
  );
}

export default App;

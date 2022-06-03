import "./App.css";
import styled from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import IssueList from "./Comoponents/IssueList";
import { fetchData } from "./api";
import useIssueFetch from "./useIssueFetch";

function App() {
  const state = useIssueFetch(fetchData, []);
  const { loading, data: issues, error } = state;

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error!</div>;
  if (!issues) return null;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout className="App">
        <IssueList issues={issues} />
      </Layout>
    </ThemeProvider>
  );
}
const Layout = styled.div`
  padding: 50px;
`;
export default App;

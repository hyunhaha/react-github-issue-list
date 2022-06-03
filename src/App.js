import styled from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import IssueList from "./Components/IssueList";
import { fetchData } from "./api/api";
import useIssueFetch from "./hooks/useIssueFetch";

function App() {
  const state = useIssueFetch(fetchData, []);
  const { loading, data: issues, error } = state;
  const sortData = data => {
    const sortedData = data.sort((a, b) => b.comments - a.comments);
    return sortedData;
  };
  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error!</div>;
  if (!issues) return null;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout className="App">
        <IssueList issues={sortData(issues)} />
      </Layout>
    </ThemeProvider>
  );
}
const Layout = styled.div`
  padding: 50px;
`;
export default App;

import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import IssueList from "./Comoponents/IssueList";

function App() {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    let myHeaders = new Headers();

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues",
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        const sortedArr = result.sort((a, b) => b.comments - a.comments);
        setIssues(sortedArr);
      })
      .catch(error => console.log("error", error));
  }, []);
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

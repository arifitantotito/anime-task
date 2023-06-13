import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { HomePage, MovieDetail, MyCollection } from "pages";
import { WebTitle } from "components";

function App() {
  const apolloClient = new ApolloClient({
    uri: "https://graphql.anilist.co",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <WebTitle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
          <Route path="/collection" element={<MyCollection />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage/Login';
import AboutPage from './pages/AboutPage/AboutPage';
import SignUp from './pages/SignUpPage/SignUp';
import ProfilePage from './pages/ProfilePage';
import Search from './pages/RecipePage/searchRecipe';
import Selected from './pages/RecipePage/selectRecipe';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}>
            </Route>
            <Route path="/profile" element={<ProfilePage />}>
            </Route>
            <Route path="/login" element={<LoginPage />}>
            </Route>
            <Route path="/about" element={<AboutPage />}>
            </Route>
            <Route path="/signup" element={<SignUp />}>
            </Route>
            {/* <Switch>
        <Route exact path="/recipes" element={<Search />} />
        <Route path="/recipes/:id" element={<Selected />} />
      </Switch> */}
            <Route exact path="/recipes" element={<Search />}>
            </Route>
            <Route path="/recipes/:id" element={<Selected />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import LoginPage from './pages/LoginPage/Login';
import AboutPage from './pages/AboutPage/AboutPage';
import SignUp from './pages/SignUpPage/SignUp';
import ProfilePage from './pages/ProfilePage';
import Search from './pages/RecipePage/searchRecipe';


// import Profile from './pages/profile'
// import Recipes from './pages/recipes'

//Layout = Nav on Bottom
//Layout1 = sideNav
//Layout2 = Nav on top under Hero

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
            <Route path="/" element={<ProfilePage />}>
            </Route>
            <Route path="/login" element={<LoginPage />}>
            </Route>
            <Route path="/about" element={<AboutPage />}>
            </Route>
            <Route path="/signup" element={<SignUp />}>
            </Route>
            <Route path="/search" element={<Search />}>
            </Route>
            {/* <Route path="/search" element={<SearchPage />}>
            </Route> */}
            {/* <Route path="/login" element={<Layout />}>
          <Route index element={<Login />} />
        </Route> */}
            {/* <Route path="/profile" element={<Layout1 />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/recipes" element={<Layout1 />}>
          <Route index element={<Recipes />} />
        </Route>
        <Route path="/myMealPlanCart" element={<Layout1 />}>
          <Route index element={<MealPlans />} />
        </Route>
        <Route path="/aboutUs" element={<Layout2 />}>
          <Route index element={<AboutUs />} />
        </Route> */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

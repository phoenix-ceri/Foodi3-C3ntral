import './App.css';
import { Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
// import Layout1 from './components/Layout1'
// import Layout2 from './components/Layout2'
import Home from './pages/home'
import Profile from './pages/profile'
import Recipes from './pages/recipes'
import MealPlans from './pages/myMealPlanCart'
import AboutUs from './pages/aboutus'
import Login from './pages/login'

//Layout = Nav on Bottom
//Layout1 = sideNav
//Layout2 = Nav on top under Hero

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Layout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/profile" element={<Layout1 />}>
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
        </Route>
      </Routes>
    </>
  );
}

export default App;

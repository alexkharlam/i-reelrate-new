import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Search from "./pages/Search";
import MyReviews from "./pages/MyReviews";
import TestPage from "./pages/TestPage";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";
import CreateReview from "./pages/CreateReview";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} errorElement={<ErrorPage />}>
            <Route index={true} path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<p>About screen</p>} />
            <Route path='/test' element={<TestPage />} />
            <Route path='/search' element={<Search />} />
            <Route path='/reviews/:id' element={<Review />} />

            <Route path='' element={<PrivateRoute />}>
                <Route path='/reviews/create' element={<CreateReview />} />
                <Route path='/profile/reviews' element={<MyReviews />} />
            </Route>
        </Route>
    )
);

export default router;

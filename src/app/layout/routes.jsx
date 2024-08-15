import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from '../pages/Home/Home.jsx';
import SignUp from "../pages/authentication/SignUp/SignUp.jsx";
import SignIn from "../pages/authentication/SignIn/SignIn.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            }, {
                path: '/sign-up',
                element: <SignUp />
            }, {
                path: 'sign-in',
                element: <SignIn />
            }
        ]
    }
]);

export default routes;
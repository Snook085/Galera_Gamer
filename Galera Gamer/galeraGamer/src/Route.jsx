import { createBrowserRouter } from "react-router-dom";

import Noticias from "./pages/Noticias/Noticias";
import Home from "./home";
import PainelAdmin from "./pages/PainelAdmin";
import QuemSomos from "./pages/quemSomos";



const Router = createBrowserRouter([
    {
    path: '/',
    element: <Home/>
    },
    {
        path:'/noticias',
        element:<Noticias/>,
    },
    {
        path:'/paineladm',
        element:<PainelAdmin/>,
    },
    {
        path:'/quemsomos',
        element:<QuemSomos/>,
    }
])

export default Router;
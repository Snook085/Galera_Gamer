import { createBrowserRouter } from "react-router-dom";

import Noticias from "./pages/Noticias/Noticias";
import Home from "./home";
import PainelAdmin from "./pages/PainelAdmin";
import QuemSomos from "./pages/quemSomos";
import NewsDetails from "./pages/NewsDetails";
import Lancamentos from "./pages/lancamentos";
import LancaDetails from './pages/LancaDetails'



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
    },
    {
        path:'/noticias/:id',
        element:<NewsDetails/>
    },
    {
        path:'/lancamentos',
        element:<Lancamentos/>
    },
    {
        path:'/lancamentos/:id',
        element:<LancaDetails/>
    }
])

export default Router;
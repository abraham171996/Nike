import { v4 as uuidv4 } from 'uuid';
import Home from "./pages/Home";
import NewFeatured from './pages/New & Featured';
import {createBrowserRouter} from 'react-router-dom'
import Layout from './features/Layout';
import ProductDetails from './pages/ProductDetails/ProductDetails';

export const  router = createBrowserRouter(
    
    [
        {
            
            
            path:"/",
            element:<Layout>
                <Home/>
            </Layout>
        },
        {
            path:"/new&featured",
            element:<Layout>
                <NewFeatured />
            </Layout>
        },
        {
            path:"/products/:productId",
            element:<Layout>
                <ProductDetails />
            </Layout>
        }
    ]
) 
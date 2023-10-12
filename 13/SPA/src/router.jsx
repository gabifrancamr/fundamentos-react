import {createBrowserRouter} from "react-router-dom"
import Products from "./pages/Products"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import AdminHome from "./pages/admin/Admin"
import RootLayout from "./components/RootLayout"
import Product from "./pages/Product"
import loadProduct from "./loaders/products"
import ProductBoundary from "./error-boundaries/ProductBoundary"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [ {
            index: true,
            element: <Home />
        }, {
            path: "/products",
            element: <Products />
        }, {
            path: "products/:productId",
            element: <Product />,
            loader: loadProduct,
            errorElement: <ProductBoundary />
        }, {
            path: "/cart",
            element: <Cart />
        }]
    },
    {
        path: "/admin",
        element: <AdminHome />
    }

])

export default router
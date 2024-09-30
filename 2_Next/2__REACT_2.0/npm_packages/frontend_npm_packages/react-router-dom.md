```js
Routing:
        import { BrowserRouter, Routes, Route } from "react-router-dom";

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="product/:id" element={<ProductView />} />
                <Route path="prod-list/:category/:page" element={<ProductsList />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="*" element={<Empty />} />
                </Route>
            <Route path="admin" element={<LayoutAdmin />}>
                <Route index element={<AdminPanel />} />
                <Route path="add-product" element={<AdminAdd />} />
            </Route>
        </Routes>
        </BrowserRouter>

                        // to Layout
                        export default function  Layout(){
                            return ( <>
                                    {/* <Preloader /> */}
                                    <Header />
                                            <Outlet />
                                    <Footer />
                            </>);
                        }



Parametrs - url.com/:ctegory/:page
        import { useParams } from "react-router-dom";

        const {category, page } = useParams();

Redirection
        import { Navigate } from "react-router-dom";

        <Navigate to='/url' />

Get parameters - URL.COM?name=jack&id=1
        import { useSearchParams } from "react-router-dom";

        const [searchParams, setSearchParams] = useSearchParams()
        searchParams.get('name') // retutn jack


```
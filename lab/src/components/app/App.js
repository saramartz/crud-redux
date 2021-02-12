import { Switch, Route, Redirect } from 'react-router-dom'
import Navigation from '../navbar'
import Products from '../products/products'
import NewProduct from '../products/product-new'
import ProductEdit from '../products/product-edit'

// Redux
import { Provider } from 'react-redux'
import store from '../store'

const App = () => {
    return (
        <Provider store={store}>
            <Navigation />
            <div className='my-5'>
                <Switch>
                    <Route exact path='/' component={Products} />
                    <Route path='/product/new' component={NewProduct} />
                    <Route path='/product/:id' component={ProductEdit} />
                </Switch>
            </div>
        </Provider>
    )
}

export default App

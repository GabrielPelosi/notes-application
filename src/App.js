import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/system-admin-login" exact>
                        <AdminLogin />
                    </Route>
                    <Route path="/system-admin-dashboard" exact>
                        <AdminDashboard />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App

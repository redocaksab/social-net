import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeAPP } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"; 
import store from "./redux/redux-store";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeAPP();
    }
    render() {
        if (!this.props.initialized) return <Preloader />

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                        render={() => <DialogsContainer />} />

                    <Route path='/profile/:userId?'
                        render={() => <ProfileContainer />} />

                    <Route path='/users'
                        render={() => <UsersContainer />} />
                    <Route path='/login'
                        render={() => <Login />} />
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeAPP })
)(App);


export let MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>;
}
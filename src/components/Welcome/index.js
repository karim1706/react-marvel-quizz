import React, {useState, Fragment, useContext, useEffect} from 'react';
import {FirebaseContext} from '../Firebase';
import Logout from '../Logout';
import Quiz from '../Quiz';

const loaderStyle = {
    textAlign:'center',
    color:'white'
}

const Welcome = (props) => {

    const [userSession, setuserSession] = useState(null);

    const [userData, setUserData] = useState({});

    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setuserSession(user) : props.history.push('/');
        })

        if(userSession !== null) {
            firebase.user(userSession.uid)
                .get()
                .then((doc) => {
                    if(doc && doc.exists){
                        const myData = doc.data();
                        setUserData(myData)
                    }
                })
                .catch(() => {
                    
                })
        }

        return () => {
            listener()
        }
    }, [userSession, firebase, props.history])

    return userSession === null ? (
        <Fragment>
            <div className="loader"></div>
            <p style={loaderStyle}>Authentification...</p>
        </Fragment>
    ) : (
        <div className="quiz-bg">
            <div className="container">
                <Logout />
                <Quiz userData={userData}/>
            </div>
        </div>
    )

}

export default Welcome

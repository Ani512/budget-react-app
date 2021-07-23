import { firebase, googleAuthProvider } from '../firebase/firebase';

const startLogin = () =>
{
    return ( dispatch ) =>
    {
        return firebase.auth().signInWithPopup( googleAuthProvider );
    };
};

export default startLogin;
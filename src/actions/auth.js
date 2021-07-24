import { firebase, googleAuthProvider } from '../firebase/firebase';

const startLogin = () =>
{
    return () =>
    {
        firebase.auth().setPersistence( firebase.auth.Auth.Persistence.SESSION ).then( () =>
        {
            return firebase.auth().signInWithPopup( googleAuthProvider );
        } ).catch( ( error ) =>
        {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log( `${ errorCode } : ${ errorMessage }` );
        } );
    };
};

const startLogout = () =>
{
    return () =>
    {
        return firebase.auth().signOut();
    };
};

export { startLogin, startLogout };
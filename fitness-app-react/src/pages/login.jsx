import AuthForm from "../components/authForm/authForm";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/authSlice";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginWithEmail = (e) => {
    const email = e.target[0].value;
    const pass = e.target[1].value;
    const remember = e.target[2].checked;

    signInWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        dispatch(
          addUser({
            user: user.user.email,
            accessToken: user.user.accessToken,
            remember: remember,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleAuth = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = res.user.displayName || res.user.email;
        dispatch(
          addUser({
            user: user,
            accessToken: token,
            rememner: false,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleRegisterNewUser = (e) => {
    const email = e.target[0].value;
    const password = e.target[1].value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        // Signed in
        const user = userCredential.user;
        alert("User created successfully! Please login in your new account.")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message)
        // ..
      });
  };

  return (
    <AuthForm
      handleOnSubmit={(e, login) =>
        login ? handleLoginWithEmail(e) : handleRegisterNewUser(e)
      }
      handleGoogleBtnClick={handleGoogleAuth}
    />
  );
};

export default Login;

import AuthForm from "../components/authForm/authForm";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/authSlice";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase";

const Login = () => {

  const dispatch = useDispatch();

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const pass = e.target[1].value;
    const remember = e.target[2].checked;
    console.log(email, pass, remember);
    signInWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        dispatch(addUser({
            user: user.user.email,
            accessToken: user.user.accessToken,
            rememner: remember
        }))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleAuth = () => {};

  return (
    <AuthForm
      handleOnSubmit={handleLoginWithEmail}
      handleGoogleBtnClick={handleGoogleAuth}
    />
  );
};

export default Login;

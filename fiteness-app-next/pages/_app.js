import Layout from "../components/layout";
import { Provider } from "react-redux"
import store from "../redux/store";
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}

export default MyApp

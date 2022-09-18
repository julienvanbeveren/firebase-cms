import "../styles/normalize.scss";
import "../styles/variables.scss";
import "../styles/globals.scss";
import "../styles/main.scss";
import "../styles/components/sidebar.scss";
import "../styles/components/helpers.scss";
import "../styles/components/form.scss";
import "../styles/components/table.scss";
import { AppProps } from "next/app";
import Sidebar from "../components/sidebar/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;

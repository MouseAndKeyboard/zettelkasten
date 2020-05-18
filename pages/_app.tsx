import { AppProps } from 'next/app'
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";

const App = ({ Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />
}

export default App

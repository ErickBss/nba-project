import '../styles/GlobalStyle.css'


  
  export default function CustomApp({ Component, pageProps }) {
    return (
      <>
     
        <Component {...pageProps} />
      </>
    );
  }
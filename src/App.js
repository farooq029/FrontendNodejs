import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header";
import Head from "./components/Head";
import Services from "./components/Services";
import Widgets from "./components/Widgets";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const BAckendURL = "https://0b67y.sse.codesandbox.io/";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(BAckendURL)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  // const result = data.map(dataItems => <Header {...dataItems} />);

  return (
    <div className="App">
      <div
        className="main"
        style={{
          backgroundImage: "url('https://i.picsum.photos/id/990/1700/1000.jpg')"
        }}
      >
        {/* <Header {...data} /> */}
        {data.map((item, id) => {
          return <Header {...item} key={id} />;
        })}

        {data.map((item, id) => {
          return <Head {...item} key={id} />;
        })}

        {data.map((item, id) => {
          return <Services {...item} key={id} />;
        })}

        {data.map((item, id) => {
          return <Widgets {...item} key={id} />;
        })}

        {data.map((item, id) => {
          return <ContactForm {...item} key={id} />;
        })}

        {data.map((item, id) => {
          return <Footer {...item} key={id} />;
        })}

        {/* <Head />
        <Services />
        <Widgets />
        <ContactForm />
        <Footer /> */}
      </div>
    </div>
  );
}

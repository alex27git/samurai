import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Raiting/Rating";

function App() {
  return (
    <div className="App">
      <PageTitle title={"This is APP Components"}/>
      <PageTitle title={"My friends"}/>
      <Accordion titleValue={"Меню"} collapsed={true}/>
      <Accordion titleValue={"Users"} collapsed={false} />
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return(
    <h1> {props.title}</h1>
    )
}

export default App;

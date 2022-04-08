// import logo from './logo.svg';
import './App.css';
import CardGroup from './component/cardGroup/cardGroup';
import { Button } from 'react-bootstrap';
import CardGroup2 from './component/CardGroup2/CardGroup2';
import AccordionM from './component/Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <CardGroup></CardGroup>
      <Button variant="danger mt-4 mb-4">My Button</Button>
      <CardGroup2></CardGroup2>
      <h2>Accordion</h2>
      <AccordionM></AccordionM>
    </div>
  );
}

export default App;

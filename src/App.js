import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [fistNumber, setFistNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = () => {
    setCurrentNumber('0');
    setFistNumber('0');
    setOperation('');
  }

  const handleOnDelete = () => {
    if (currentNumber.length === 1) {
      setCurrentNumber('0');
    } else {
      setCurrentNumber(currentNumber.slice(0, -1));
    }
  }

  const handleAddNumber = (num) => {
    if (currentNumber === '0') {
      setCurrentNumber(num);
    } else {
      setCurrentNumber(currentNumber + num);
    } 
    
  }

  const handleSumNumbers = () => {
    if(fistNumber === '0') {
      setFistNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else {
      const sum = Number(fistNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFistNumber('0');
      setOperation('');
    }
  }

  const handleEguals = () => {
    if(operation === '+') {
      const sum = Number(fistNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFistNumber('0');
      setOperation('');
    } else if (operation === '-') {
      const sub = Number(fistNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setFistNumber('0');
      setOperation('');
    } else if (operation === '*') {
      const mult = Number(fistNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFistNumber('0');
      setOperation('');
    } else if (operation === '/') {
      const div = Number(fistNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setFistNumber('0');
      setOperation('');
    } else {
      return;
    }
  }

  const handleSubNumbers = () => {
    if(fistNumber === '0') {
      setFistNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else {
      const sub = Number(fistNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setFistNumber('0');
      setOperation('');
    }
  }

  const handleAddDecimal = () => {
    if(!currentNumber.includes('.')) {
      setCurrentNumber(prev => `${prev}.`);
    }
  }

  const handleMultiplyNumbers = () => {
    if(fistNumber === '0') {
      setFistNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }else {
      const mult = Number(fistNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFistNumber('0');
      setOperation('');
    }
  }

  const handleDivideNumbers = () => {
    if(fistNumber === '0') {
      setFistNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else {
      const div = Number(fistNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setFistNumber('0');
      setOperation('');
    }
  }

  const handlePercent = () => {
    if(currentNumber !== '0') {
      setCurrentNumber(prev => `${prev / 100}`);
    }
  }

  const handleSquareRoot = () => {
    if(currentNumber !== '0') {
      setCurrentNumber(prev => `${Math.sqrt(prev)}`);
    }
  }



  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label={"%"} onClick={handlePercent} />
          <Button label={"/"} onClick={handleDivideNumbers} />
          <Button label={"C"} onClick={handleOnClear} />
          <Button label={"<="} onClick={handleOnDelete} />
        </Row>
        <Row>
          <Button label={7} onClick={() => handleAddNumber('7')} />
          <Button label={8} onClick={() => handleAddNumber('8')} />
          <Button label={9} onClick={() => handleAddNumber('9')} />
          <Button label={"X"} onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label={4} onClick={() => handleAddNumber('4')} />
          <Button label={5} onClick={() => handleAddNumber('5')} />
          <Button label={6} onClick={() => handleAddNumber('6')} />
          <Button label={"-"} onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber('1')} />
          <Button label={2} onClick={() => handleAddNumber('2')} />
          <Button label={3} onClick={() => handleAddNumber('3')} />
          <Button label={"+"} onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label={"Raiz"} onClick={() => handleSquareRoot(',')} />
          <Button label={0} onClick={() => handleAddNumber('0')} />
          <Button label={"."} onClick={handleAddDecimal} />
          <Button label={"="} onClick={handleEguals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;

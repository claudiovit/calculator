import { InputContainer } from "./styles";

const Input = ({value}) => {
  return (
    <InputContainer>
      <input type="text" disabled value={value} />
    </InputContainer>
  );
}

export default Input;

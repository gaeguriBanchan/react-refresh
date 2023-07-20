import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Text = styled.span`
  color: white;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: greenyellow;
`;

function App() {
  return (
    <>
      <Father>
        <Box bgColor="teal">
          <Text>hello</Text>
        </Box>
        <Circle bgColor="green"></Circle>
        <Btn>login</Btn>
        <Btn as="a" href="/">
          Login
        </Btn>
      </Father>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
    </>
  );
}

export default App;

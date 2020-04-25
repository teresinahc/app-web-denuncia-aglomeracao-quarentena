import styled from 'styled-components'

const Input = styled.input`
  border: none;
  font-size: 16px;

  background: #f8f8f8;
  box-shadow: -4px -4px 9px #ffffff, 4px 4px 9px rgba(0, 0, 0, 0.2);
  border-radius: 15px;

  padding: 10px;
  color: #676767;

  width: 90%;
  margin: 10px 0;

  &:focus {
    outline: none;
  }
`

export default Input

export const Select = styled.select`
  background: #f8f8f8;
  color: #676767;
  border-radius: 15px;
  box-shadow: -4px -4px 9px #ffffff, 4px 4px 9px rgba(0, 0, 0, 0.2);

  margin: 10px 0;
  padding: 10px;
  width: 90%;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;

  &:focus {
    outline: none;
  }

  &:disabled {
    color: #e5e5e5;
  }
`

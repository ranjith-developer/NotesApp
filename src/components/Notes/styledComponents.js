// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  margin-bottom: 32px;
  margin-top: 42px;
  font-size: 42px;
`

export const FormContainer = styled.form`
  width: 50%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 5px 2px 5px #cbd5e1;
  margin-bottom: 32px;
  margin-top: 24px;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 12px;
`

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 12px;
  line-height: 1.5;
`

export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  align-self: flex-end;
`

export const NotesItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  width: 50%;
`

export const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 50%;
  margin-bottom: 0px;
`

export const NotesMsg = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 0px;
`

export const NotesText = styled.p`
  color: #475569;
  font-family: 'Roboto';
`

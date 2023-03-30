// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  AppContainer,
  NotesHeading,
  FormContainer,
  InputContainer,
  Input,
  TextArea,
  Button,
  NotesItemContainer,
  NoNotesContainer,
  Image,
  NotesMsg,
  NotesText,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])

  const renderNotesList = () => (
    <NotesItemContainer>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} notesDetails={eachNote} />
      ))}
    </NotesItemContainer>
  )

  const renderNoNotesView = () => (
    <NoNotesContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NotesMsg>No Notes Yet</NotesMsg>
      <NotesText>Notes you add will appear here</NotesText>
    </NoNotesContainer>
  )

  const titleInput = event => {
    setTitle(event.target.value)
  }

  const notesInput = event => {
    setNotes(event.target.value)
  }

  const onAddNotes = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      notes,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNotes])
    setTitle('')
    setNotes('')
  }

  return (
    <AppContainer>
      <NotesHeading>Notes</NotesHeading>
      <FormContainer onSubmit={onAddNotes}>
        <InputContainer>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={titleInput}
          />
          <TextArea
            placeholder="Take a Note..."
            value={notes}
            onChange={notesInput}
            rows="3"
          />
          <Button type="submit">Add</Button>
        </InputContainer>
      </FormContainer>
      {notesList.length === 0 ? renderNoNotesView() : renderNotesList()}
    </AppContainer>
  )
}

export default Notes

// Write your code here
import {NotesContainer, NotesHeading, NotesInfo} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {title, notes} = notesDetails
  return (
    <NotesContainer>
      <NotesHeading>{title}</NotesHeading>
      <NotesInfo>{notes}</NotesInfo>
    </NotesContainer>
  )
}

export default NoteItem

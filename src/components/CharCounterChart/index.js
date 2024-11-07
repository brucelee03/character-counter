import {Component} from 'react'
import {v4 as uuidv4} from 'uuid' // Import uuid for unique IDs
import CharItem from '../CharItem'

import {
  CharCounterContainer,
  CharCounterCard,
  CharCounterHeader,
  CharCounterHeading,
  CharCounterListItem,
  CharCounterImg,
  CharEnteringContainer,
  CharHeading,
  FormContainer,
  InputFieldCard,
  InputField,
  AddButton,
} from '../styledComponents'

class CharCounterChart extends Component {
  state = {charInput: '', charCounterLists: []}

  onChangeCharacter = event => {
    this.setState({charInput: event.target.value})
  }

  onClickAddBtn = event => {
    event.preventDefault() // Prevent form submission
    const {charInput} = this.state
    if (charInput) {
      this.setState(prevState => ({
        charCounterLists: [
          ...prevState.charCounterLists,
          {
            uniqueNo: uuidv4(), // Generate a unique ID
            char: charInput, // Store charInput directly as a string
            charCounter: charInput.length, // Store the length directly
          },
        ],
        charInput: '',
      }))
    }
  }

  render() {
    const {charInput, charCounterLists} = this.state
    return (
      <CharCounterContainer>
        <CharCounterCard>
          <CharCounterHeader>
            <CharCounterHeading>
              Count the characters like a Boss...
            </CharCounterHeading>
          </CharCounterHeader>
          <>
            {charCounterLists.length > 0 ? (
              <CharCounterListItem>
                {charCounterLists.map(eachCharItem => (
                  <CharItem
                    key={eachCharItem.uniqueNo}
                    charCounterItem={eachCharItem}
                  />
                ))}
              </CharCounterListItem>
            ) : (
              <CharCounterImg
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </>
        </CharCounterCard>
        <CharEnteringContainer>
          <CharHeading>Character Counter</CharHeading>
          <FormContainer onSubmit={this.onClickAddBtn}>
            <InputFieldCard>
              <InputField
                type="text"
                value={charInput}
                onChange={this.onChangeCharacter}
                placeholder="Enter the Characters here"
              />
              <AddButton type="submit">Add</AddButton>
            </InputFieldCard>
          </FormContainer>
        </CharEnteringContainer>
      </CharCounterContainer>
    )
  }
}

export default CharCounterChart

import {CharCounterItemValue} from '../styledComponents'

const CharItem = props => {
  const {charCounterItem} = props
  const {char, charCounter} = charCounterItem

  return (
    <li>
      <CharCounterItemValue>
        {char}: {charCounter}
      </CharCounterItemValue>
    </li>
  )
}

export default CharItem

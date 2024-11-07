import styled from 'styled-components'

export const CharCounterContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: white;
  padding: 30px;
  overflow-y: auto;
`

export const CharCounterCard = styled.div`
  width: 50%;
  background: #ffc533;
  border-radius: 6px 0 0 6px;
  display: flex;
  flex-direction: column;
`

export const CharCounterHeader = styled.div`
  background: #ffbf1f;
  margin: 8px;
  height: 145px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 38px;
`

export const CharCounterHeading = styled.h1`
  margin: 0;
  font-size: 27px;
  color: #272c47;
`

export const CharCounterListItem = styled.ul`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  list-style: none;
`

export const CharCounterItemValue = styled.p`
  margin-top: 0;
  font-size: 17px;
  font-weight: 600;
  color: #0f172a;
`

export const CharCounterImg = styled.img`
  width: 80%;
  align-self: center;
  margin-top: 64px;
`

export const CharEnteringContainer = styled.div`
  width: 50%;
  background-color: #0f172a;
  border-radius: 0 6px 6px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 21px;
`

export const CharHeading = styled(CharCounterHeading)`
  font-size: 30px;
  color: #ffbf1f;
`

export const FormContainer = styled.form`
  width: 100%;
`

export const InputFieldCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const InputField = styled.input`
  width: 82%;
  padding: 10px 13px;
  font-size: 13px;
  outline: none;
  border-radius: 5px;
  border-width: 0;
  color: #1e293b;
  font-weight: 600;
`

export const AddButton = styled.button`
  height: 38px;
  width: 80px;
  background: #ffc533;
  border-width: 0;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
`

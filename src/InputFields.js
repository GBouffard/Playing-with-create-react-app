import React from 'react';
import InputField from './input-field'

const InputFields = () => {
  return (
    <div>
      <InputField
        id= 'my-input-field'
        value=''
        placeholderText='bla bla bla...' 
        labelText='Type some stuff'
        guidanceText='This is a guidance'
        maxLength={60}
        multiLine={true}
        disabled={false}
        errorMessage='DUDE!!!! You just raised an error!!' 
        onKeyPress={() => { console.log('pressing keys!'); }}
        inputAriaLabel='Read this stuff. It is for accessibility'
        accessibilityDescription='This is for accessibility purposes. This div which is visibly hidden will be read by the screen reader' />
    </div>
  );
}

export default InputFields;
import { useState } from 'react';
import './SignupForm.scss';

export default function SignupForm({ addContestant }: any) {

  const [value, setValue] = useState('');


  const handleChange = (event: any) => {
    setValue(event?.target?.value)
  }

  const handleSubmit = (event: any) => {
    addContestant(value)
    event.preventDefault();
    setValue('');
  }

  return (
    <form>
      <div className='signup-form'>
        <label className='label'>
          <input className='signup-field' type="text" name="name" value={value} onChange={handleChange} placeholder={'Name'} />
        </label>
        <input disabled={!value} className='submit-button' type="submit" value="Submit" onClick={handleSubmit} />
      </div></form>
  )
}

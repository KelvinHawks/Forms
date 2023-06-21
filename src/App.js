import React from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    textarea: "",
    isFriendly: false,
    employment: '',
    favColor: ''

  })
  
  function handleChange(e){
    const{name, value, type, checked} = e.target
   // e.preventDefault()
   setFormData(prevFormData=> {
    return{
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }
  })
  }
  function handleSubmit(e){
    e.preventDefault()
    //submitToApi(formData)
    console.log(formData);
  }
 
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='First Name'
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          />
           <input 
          type='text' 
          placeholder='Last Name'
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
          />
          <textarea 
            name="textarea"
           onChange={handleChange}
           placeholder='comment'
           value={formData.textarea}
           />
           <input
             name="isFriendly"
            type='checkbox'
            id='isFriendly'
            checked={formData.isFriendly}
            onChange={handleChange}
           />
           <label htmlFor='isFriendly'>Are you friendly</label>

           <fieldset>
            <legend>Current employment status</legend>
            <input
              type='radio'
              id='unemployed'
              name='employment'
              value='unemployed'
              onChange={handleChange}
            />
            <label htmlFor='unemployed'>Unemployed</label>
            <input
              type='radio'
              id='part-time'
              name='employment'
              value='part-time'
              onChange={handleChange}
            />
            <label htmlFor='unemployed'>part-time</label>
            <input
              type='radio'
              id='full-time'
              name='employment'
              value='full-time'
              onChange={handleChange}
            />
            <label htmlFor='unemployed'>full-time</label>
           </fieldset>
           <select 
            id='favColor'
            onChange={handleChange}
            name='favColor'
            value={formData.favColor}
            >
            <option value=''>---choose---</option>
            <option value='red'>Red</option>
            <option value='blue'>blue</option>
            <option value='orange'>orange</option>
            <option value='purple'>purple</option>
            <option value='violet'>violet</option>
            <option value='indigo'>indigo</option>
           </select>
           <button>Submit</button>
      </form>
     <p></p>
     
    </div>
  );
}

export default App;

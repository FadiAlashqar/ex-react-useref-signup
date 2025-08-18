import { useState } from 'react'


function App() {

  const [completeName, setCompleteName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [experience, setExperience] = useState(0)
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault();

    const select = document.querySelector('.form-select')

    if (completeName && userName && password && select.value && experience > 0 && description) {
      console.log(`
     - Nome : ${completeName}
     - Username : ${userName}
     - Password : ${password}
     - Specializzazione : ${specialization}
     - Esperienza : ${experience}
     - Descrizione : ${description}
      `)
    }
    else {
      console.error('Errore, compila tutti i campi!')
    }
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form>
            <section className='my-2'>
              <label htmlFor="name"><strong>Name</strong></label>
              <input
                type="text"
                id='name'
                value={completeName}
                onChange={(e) => setCompleteName(e.target.value)}
              />
            </section>
            <section className='my-2'>
              <label htmlFor="username"><strong>Username</strong></label>
              <input
                type="text"
                id='username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </section>
            <section>
              <label htmlFor="password"><strong>Password</strong></label>
              <input
                type="password"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </section>
            <section className='my-2'>
              <label><strong>Choose specialization</strong></label>
              <select className="form-select"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}>
                <option defaultValue></option>
                <option value='Full Stack'>Full Stack</option>
                <option value='Frontend'>Frontend</option>
                <option value='Backend'>Backend</option>
              </select>
            </section>
            <section className='my-2'>
              <label htmlFor="experience"><strong>Years of experience</strong></label>
              <input
                type="number"
                id='experience'
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </section>
            <div className="form-floating my-2">
              <textarea className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="floatingTextarea"></textarea>
              <label htmlFor="floatingTextarea">Brief description of your self</label>
            </div>
            <section>
              <button type='submit' onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
            </section>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

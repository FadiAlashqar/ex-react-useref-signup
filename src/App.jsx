import { useEffect, useRef, useState } from 'react'


function App() {

  console.log('render')

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault();

    const select = document.querySelector('.form-select')

    if (nameRef.current.value && userName && password && specializationRef.current.value && experienceRef.current.value > 0 && description) {
      console.log(`
     - Nome : ${nameRef.current.value}
     - Username : ${userName}
     - Password : ${password}
     - Specializzazione : ${specializationRef.current.value}
     - Esperienza : ${experienceRef.current.value}
     - Descrizione : ${description}
      `)
    }
    else {
      console.error('Errore, compila tutti i campi!')
    }
  }

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  const includesLetters = letters.split("").some((c) => userName.includes(c))
  const includesNumbers = numbers.split("").some((n) => userName.includes(n))
  const includesSymbols = symbols.split("").some((n) => userName.includes(n))
  const noSpace = userName.trim() !== "" && !userName.includes(" ")

  const passIncludesLetters = letters.split("").some((p) => password.includes(p))
  const passIncludesNumbers = numbers.split("").some((p) => password.includes(p))
  const passIncludesSymbols = symbols.split("").some((p) => password.includes(p))

  const noSpaceDescription = description === description.trim()

  const nameRef = useRef();
  const specializationRef = useRef();
  const experienceRef = useRef(0);



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
                ref={nameRef}
              />
            </section>
            <section className='my-2'>
              <label htmlFor="username"><strong>Username</strong></label>
              <input
                type="text"
                id='username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className='mx-2'
              />
              {includesLetters && includesNumbers && !includesSymbols && noSpace && userName.length >= 6 ? <p className="text-success">Campo valido</p> : <p className="text-danger">Campo non valido</p>}
            </section>
            <section>
              <label htmlFor="password"><strong>Password</strong></label>
              <input
                type="password"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mx-2'
              />
              {passIncludesLetters && passIncludesNumbers && passIncludesSymbols && password.length >= 8 ? <p className="text-success">Campo valido</p> : <p className="text-danger">Campo non valido</p>}
            </section>
            <section className='my-2'>
              <label><strong>Choose specialization</strong></label>
              <select className="form-select"
                ref={specializationRef}
              >
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
                ref={experienceRef}
                className='mx-2'
              />
            </section>
            <div className="form-floating my-2">
              <textarea className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="floatingTextarea"></textarea>
              <label htmlFor="floatingTextarea">Brief description of your self</label>
            </div>
            {description.length > 100 && description.length <= 1000 && noSpaceDescription ? <p className="text-success">Campo valido</p> : <p className="text-danger">Campo non valido</p>}
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


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

  const handleReset = (e) => {
    e.preventDefault();
    setUserName("")
    setPassword("")
    setDescription("")
    nameRef.current.value = ""
    specializationRef.current.value = ""
    experienceRef.current.value = 0
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
  const startRef = useRef();


  useEffect(() => {
    nameRef.current.focus()
  }, [])


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 ref={startRef}>Web Dev signUp</h1>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12">
          <form>
            <section className='my-2'>
              <label htmlFor="name"><strong>Name</strong></label>
              <input
                type="text"
                id='name'
                ref={nameRef}
                className='mx-2'
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
            <div>
              <button type='submit' onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
              <button className='mx-2' onClick={(e) => handleReset(e)}>Reset</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12">
          <div className='arrow d-flex justify-content-end'>
            <i onClick={() => startRef.current.scrollIntoView({ behavior: "smooth" })} className="fa-regular fa-circle-up"></i>
          </div>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor unde incidunt non cupiditate veritatis vero hic odio consequuntur quaerat a beatae ea iste maxime eos quod suscipit, explicabo expedita tempora sunt ipsam mollitia. Ex omnis quae, in ratione minus praesentium illo porro ea atque nisi iure sint recusandae fugiat nam, quidem accusamus doloribus possimus tempore perferendis inventore maiores dignissimos labore dolor! Quia quos fugiat dicta cum numquam. Itaque quae libero, beatae, non, quas minima optio nesciunt eum officiis perferendis pariatur reprehenderit facere rerum illo? Excepturi aut fuga maxime quae libero dicta? Cum rerum corporis eum tenetur? Consectetur deleniti nesciunt est neque eos soluta quisquam accusamus officiis dignissimos placeat minus error vero dolorem, maxime aspernatur. Provident, tempore, modi voluptatem enim eveniet at molestiae quam illum quas quis doloribus est voluptas et laborum perferendis incidunt placeat fugit dicta consequuntur corrupti asperiores! Sunt incidunt impedit assumenda vero omnis blanditiis adipisci? Deserunt quas facilis culpa, ducimus velit magni repudiandae facere placeat error eaque, suscipit vitae reprehenderit eos. Hic ratione vero enim quis voluptates rem ad ducimus porro. Tempore ut voluptas voluptatibus minus magni sunt dicta, doloremque maiores, eos dolorum beatae quae soluta iure impedit sequi? Cumque, soluta dolor suscipit inventore dicta, minima, eaque corrupti asperiores dolorum vitae ea! Labore deleniti blanditiis cumque nostrum in, laboriosam possimus cupiditate eum nulla non illum repudiandae minima, repellendus at! Ab ex quos magni officiis. Rem dolore dicta tenetur optio quidem minima atque assumenda, nisi quisquam eum eius quibusdam eos. Odio repellendus deleniti, tenetur ipsum veritatis adipisci enim. Aut sit modi aliquam magni, voluptas nam cumque adipisci fugit fuga iste omnis enim cum, exercitationem excepturi natus commodi fugiat. Provident repellat totam recusandae, veritatis ipsa delectus officiis doloremque quis possimus beatae quo illo nostrum quibusdam, inventore rem, voluptatem modi est vel distinctio sapiente consequuntur minus tempore dolor. Tenetur iusto tempore eveniet quod, modi aut ex eos. Hic soluta pariatur suscipit, porro nobis aperiam corrupti voluptas quasi? Alias accusantium omnis soluta eaque quibusdam sit veniam similique asperiores non? Architecto sapiente magnam deleniti, laudantium enim beatae, et dolorem soluta culpa voluptate neque minus quaerat necessitatibus suscipit, optio in saepe eius vel sint molestiae vitae velit. Doloribus sit, amet, facere eius perspiciatis tempore, atque provident nam sequi similique sapiente. A qui minus consectetur officia dolorem sit ducimus laboriosam tempora, natus, quam error dignissimos quaerat reprehenderit repudiandae amet fugit? Ipsam praesentium, fugit qui est exercitationem fugiat, nihil corporis numquam ipsa provident repellendus distinctio ratione consequatur, autem debitis dolorum laboriosam at quam vitae animi. Repellendus recusandae exercitationem ad officia, distinctio harum tenetur similique accusantium quia. Aliquid temporibus eos quod enim quisquam distinctio nisi repudiandae quasi cupiditate architecto hic eligendi voluptates nostrum dolorum sit, repellat alias sapiente fuga quos eum reiciendis voluptate facere. Laborum, rem itaque reiciendis ducimus cum laudantium at quod animi cumque, eaque nemo porro! Corporis exercitationem ullam architecto molestiae dolore consectetur quidem nihil accusamus, porro similique, minima, sit ipsum voluptatibus impedit ut reprehenderit. Dolorem dignissimos sunt modi, sapiente unde deserunt quod possimus, saepe deleniti cupiditate quibusdam enim explicabo atque excepturi. Cupiditate, doloribus.</p>
    </div>
  )
}

export default App


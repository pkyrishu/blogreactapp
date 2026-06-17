import React from 'react'

const App = () => {
  return (
    <>
      <div>AI Blogs</div>
      {/*create a list of ai blofs*/}
      <ul>
        <li>AI in Healthcare</li>
        <li>AI in Education</li>
        <li>AI in Finance</li>
        <li>AI in Transportation</li>
      </ul>
      
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default App
import React from 'react'

function Memo() {
  return (
    <div>
      <div className="box">
        <span className="borderline"></span>
        <form>
            <h2>Sign in</h2>
            <div className="inputbox">
              <input type="text" required='required'/>
                <span>Username</span>
                <i></i>
            </div>
            <div className="inputbox">
            <input type="password" required='required'/>
                <span>Password</span>
                <i></i>
            </div>
            <div className="link">
              <a href="#">Forgot Password</a>
              <button >Orqaga</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Memo
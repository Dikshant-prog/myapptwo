import React from 'react'

function Mydropdown(props) {
  return (
   <form class="d-flex" role="search">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.login}
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="a">{props.drop.name}</a></li>
                <li><a class="dropdown-item" href="b">{props.drop.role}</a></li>
                <li><a class="dropdown-item" href="c">Something else here</a></li>
                <li> <input type='button' value="click" onClick={props.sms}/></li>
              </ul>
            </div>
          </form>
  )
}

export default Mydropdown
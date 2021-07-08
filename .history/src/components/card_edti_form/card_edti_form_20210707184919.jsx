import React from 'react';

const CardEdtiForm = (props) => {

  return (
    <section>
      <div>
        <input type="text" />
        <input type="text" />
        <select name="theme">
          <option value="dark">Dark</option>
          <option value="colorful">ColorFul</option>
          <option value="light">Light</option>
        </select>
      </div>
      <div>
        <input type="text" />
        <input type="text" />
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <div>
        <button>Ellie</button>
        <button>Delete</button>
      </div>
    </section>
  )
}

export default CardEdtiForm;
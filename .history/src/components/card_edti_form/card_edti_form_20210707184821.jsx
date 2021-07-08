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
    </section>
  )
}

export default CardEdtiForm;
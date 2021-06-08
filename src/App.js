import React, { useState } from 'react';
import data from './Data';
import List from './List';
function App() {

  const [people,setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} BirthDay Today</h3>
        <List profile = {people}/>

        <button onClick={()=> setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;

import React, {useState, useEffect} from 'react';

function UseEffect() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0, y: 0
  })

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
    // Координаты мышки
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)

    return() => {
      window.removeEventListener('mousemove', mouseMoveHandler)
      // функция позволяющая очищать слушаетля по окончанию действия
    }
  }, [])


//   useEffect(() => {
//     console.log('render')
//     //Вызывается каждый раз когда происходит рендер компонента
//   })

  useEffect(() =>  {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

      // return() => {
      //   console.log('clean type')
      // }
  },[type])

  // useEffect - служит для выполнения определенных сайд-эффектов, и с его помощью можно аннулировать Хуки

  return (
    <div >
      <h1>Ресурс: {type}</h1>  

      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Посты</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}
	
export default UseEffect
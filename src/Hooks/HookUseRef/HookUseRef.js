import React from 'react';

const HookUseRef = () => {
  const [task, setTask] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();
  const listElements = React.useRef();
  React.useEffect(() => {
    if ((localStorage.getItem('data')) && (localStorage.getItem('data'))) {
      const dados = localStorage.getItem('data');
      const dadosArr = JSON.parse(dados);
      setTask(dadosArr);
    }
  }, [])
  const estiloBotao = {
    width: '32px',
    height: '32px',
    color: 'red',
    cursor: 'pointer',
    textDecoration: 'none',
    padding: '12px'
  };
  function handleClick() {
    if (input !== '') {
      setTask([...task, input]);
      setLocalStorage([...task, input]);
    } else {
      inputElement.current.setAttribute('placeholder', 'Tem que digiar uma tarefa aqui...');
    }
    setInput('');
    inputElement.current.focus();
  }
  function excluirTarefa(e) {
    e.preventDefault();
    const indexNumber = e.currentTarget.parentElement.id[2];
    const tarefas = [...task];
    tarefas.splice(indexNumber, 1);
    setTask(tarefas);
    setLocalStorage(tarefas);
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }
  function setLocalStorage(tarefas) {
    const arr = tarefas;
    const jsonArr = JSON.stringify(arr);
    localStorage.setItem('data', jsonArr);
  }
  return (
    <React.Fragment>
      <label for='tasks'>Nova Tarefa</label>
      <input
        ref={inputElement}
        type="text"
        id='tasks'
        placeholder='Digite sua tarefa aqui...'
        value={input}
        onChange={
          ({ target }) => setInput(target.value)
        }
        onKeyDown={handleKeyDown}
      />
      <br />
      <button onClick={handleClick} >Adicionar Tarefa</button>
      <h2 style={{ fontFamily: 'sans-serif', paddingTop: '24px' }}>Lista de Tarefas:</h2>
      <ul ref={listElements}>
        {task.map((tarefa, index) => (
          <li id={`id${index}`} key={index} className="listItem">{tarefa}<a href='/' style={estiloBotao} title="Excluir tarefa" onClick={excluirTarefa}><sup>x</sup></a></li>
        ))}
      </ul>
    </React.Fragment>)
}

export default HookUseRef;
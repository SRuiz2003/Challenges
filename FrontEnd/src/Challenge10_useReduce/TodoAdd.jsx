export const TodoAdd = (onNewTodo) => {
  return (
    <>
      <h4>Agrear TODO</h4>
      <hr />
      <form>
        <input type="text" />
        <button onClick={() => onNewTodo}>Agregar</button>
      </form>
    </>
  );
};

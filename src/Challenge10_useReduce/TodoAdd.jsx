export const TodoAdd = (increment) => {
  return (
    <>
      <h4>Agrear TODO</h4>
      <hr />
      <form>
        <input type="text" />
        <button onClick={() => increment}>Agregar</button>
      </form>
    </>
  );
};

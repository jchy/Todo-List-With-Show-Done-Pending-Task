function TodoList({ data, handleToggle }) {
  console.log(data);

  return (
    <ul>
      {data.map((item) => {
        return (
          <>
            <li key={item.id}>
              {item.title} - {item.description} -{" "}
              {item.status ? "DONE" : "PENDING"}
            </li>
            <button onClick={() => handleToggle(item.id)}>Change Status</button>
          </>
        );
      })}
    </ul>
  );
}

export default TodoList;

// JSX
// null / undefined / boolean
//

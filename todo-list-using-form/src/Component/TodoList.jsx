function TodoList({ data,handleDelete, handleToggle }) {
  console.log(data);

  return (
    <div >
      {data.map((item) => {
        return (
          <>
          <div className="task-parent-div">
            <div className="todo-items">
                  <span key={item.id} className="task items" id="task">
                        {item.title}
                  </span>
                  <span className="items task" id="status">{item.status ? "DONE" : "PENDING"}</span>
                  <button onClick={() => handleToggle(item.id)} className="items toggle-btn">Toggle</button>
                  <button onClick={()=>handleDelete(item.id)} className="items delete-btn">X</button>
             </div>

             <div className="description">
                  {item.description}
             </div>
             </div>
          </>
        );
      })}
    </div>
  );
}

export default TodoList;

// JSX
// null / undefined / boolean
//

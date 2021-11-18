import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
import Pagination from "./Pagination";

const Todo = () => {
  const [list, setList] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);
  const [showPending, setShowPending] = useState(true);

  const [page, setPage] = useState(1);
  const perPage = 3;

  const changePageTo = (num) => {
    if (num <= 1) {
      setPage(1);
      return;
    }
    setPage(num);
  };

  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: uuid(),
      title,
      description,
      status: true,
    };
    setList([...list, payload]);
  };

  const filteredResults = list.filter(
    (_, i) => i >= (page - 1) * perPage && i < page * perPage
  );

  const handleToggle = (id) => {
    const updatedList = list.map((item) =>
      item.id === id
        ? { ...item, status: item.status === true ? false : true }
        : item
    );
    setList(updatedList);
  };

  return (
    <div>
     
      <TodoInput onSubmit={handleSubmit} />
      
      <TodoList data={filteredResults} handleToggle={handleToggle} />
      
     
        <button onClick={() => setShowCompleted(!showCompleted)}>
          Toggle Completed Tasks
        </button>

     
        <button onClick={() => setShowPending(!showPending)}>
          Toggle Pending Tasks
        </button>

      {showCompleted && <TodoList handleToggle={handleToggle}  data={list.filter((item) => item.status)} />}
      {showPending && <TodoList handleToggle={handleToggle}  data={list.filter((item) => !item.status)} />}
      
      <div>
        <Pagination
          currentPage={page}
          onClickCallback={(page) => changePageTo(page)}
          total={5}
        />
      </div>
    </div>
  );
};
export default Todo;

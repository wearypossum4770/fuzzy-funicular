import { useState } from "react";
export default function TodoCreate() {
  const [todo, setTodo] = useState({
    dateCompleted: null,
    title: null,
    content: null,
    isCompleted: null,
    isArchived: null,
    dateDue: null,
  });
  const handleClick = (e) => {
    let { dateCompleted, isCompleted, isArchived, dateDue } = todo;
    let data = JSON.stringify({
      get is_completed() {
        return isCompleted === "on" ? true : false;
      },
      get is_archived() {
        return isArchived === "on" ? true : false;
      },
      get date_completed() {
        return this.is_completed ? dateCompleted : new Date();
      },
      due_date: dateDue,
      date_modified: new Date(),
      date_created: new Date(),
    });
  };
  const handleChange = ({ target: { name, value } }) =>
    setTodo({ ...todo, [name]: value });
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="title">
            Title:
            <input onChange={handleChange} name="title" />
          </label>
        </div>
        <div>
          <label htmlFor="content">
            Content:
            <input onChange={handleChange} name="content" />
          </label>
        </div>
        <div>
          <label htmlFor="isCompleted">
            Mark Completed?{" "}
            <input onChange={handleChange} type="checkbox" name="isCompleted" />
          </label>
        </div>
        <div>
          <label htmlFor="dateCompleted">
            Date Completed?{" "}
            <input onChange={handleChange} type="date" name="dateCompleted" />
          </label>
        </div>
        <div>
          <label htmlFor="isArchived">
            Mark Archived?
            <input onChange={handleChange} type="checkbox" name="isArchived" />
          </label>
        </div>
        <div>
          <label htmlFor="dateDue">
            Date Due?
            <input
              onChange={handleChange}
              type="datetime-local"
              name="dateDue"
            />
          </label>
        </div>
        <div>
          <button onClick={handleClick}>Save</button>
        </div>
      </form>
    </div>
  );
}

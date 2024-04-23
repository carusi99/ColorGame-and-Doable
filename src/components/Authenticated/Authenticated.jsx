import React, { useEffect, useState } from "react";
import s from "./Authenticated.module.css";
import { BadgeAlert, Trash2 } from "lucide-react";
import { filterTasks, sortTasks } from "./utils";
import { useAuth } from "../../contexts/authContext";
import {
  getTasks,
  createTask,
  editTask,
  deleteTask,
} from "../../services/tasks";
import Button from "../Button/Button";

function Authenticated() {
  const [status, setStatus] = React.useState("idle");
  const [formStatus, setFormStatus] = React.useState("idle");
  const [tasks, setTasks] = React.useState([]);
  const { logout } = useAuth();
  const [onlyPending, setOnlyPending] = useState(false);
  const [onlyImportant, setOnlyImportant] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setStatus("loading");
        const tasksFromApi = await getTasks();

        setTasks(tasksFromApi);
        setStatus("success");
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setStatus("error");
      }
    };
    fetchTasks();
  }, [logout]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskData = Object.fromEntries(formData.entries());
    try {
      setFormStatus("loading");
      await createTask(taskData);
      const updatedTasks = await getTasks();
      setTasks(updatedTasks);
      setFormStatus("success");
    } catch (error) {
      console.error("error", error);
      setFormStatus("error");
    }
  }

  async function handleEdit(id) {
    try {
      const updatedTask = await editTask(id, { completed: !onlyPending });
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updatedTask : task))
      );
    } catch (error) {
      console.error("error", error);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("error", error);
    }
  }

  async function handleImportant(id) {
    try {
      const updatedTask = await editTask(id, { important: !onlyImportant });
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updatedTask : task))
      );
    } catch (error) {
      console.error("error", error);
    }
  }

  const isLoading = status === "loading";
  const isCreating = formStatus === "loading";

  const filteredTasks = filterTasks(tasks, { onlyPending, onlyImportant });
  const sortedTasks = sortTasks(filteredTasks, "");

  return (
    <>
      <form className={s["task-form"]} onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="do the dishes"
          required
          aria-label="title"
          disabled={isCreating}
        />
        <input
          id="due_date"
          type="date"
          name="due_date"
          aria-label="due_date"
          disabled={isCreating}
        />
        <Button variant="primary" disabled={isCreating}>
          {isCreating ? "Adding..." : "Add task"}
        </Button>
      </form>

      <div className={s["tasks-wrapper"]}>
        <aside className={s.aside}>
          <div className={s["input-group"]}>
            <label htmlFor="sort_by">Sort by</label>
            <select id="sort_by">
              <option value="due_date-asc">Due Date (old first)</option>
              <option value="due_date-desc">Due Date (new first)</option>
              <option value="alphabetical-asc">Alphabetical (a-z)</option>
              <option value="alphabetical-desc">Alphabetical (z-a)</option>
            </select>
          </div>
          <div className={s["input-group"]}>
            <label>Filter</label>
            <div className={s.checkbox}>
              <input
                type="checkbox"
                id="pending"
                checked={onlyPending}
                onChange={() => setOnlyPending(!onlyPending)}
              />
              <label htmlFor="pending">Only pending</label>
            </div>
            <div className={s.checkbox}>
              <input
                type="checkbox"
                id="important"
                checked={onlyImportant}
                onChange={() => setOnlyImportant(!onlyImportant)}
              />
              <label htmlFor="important">Only important</label>
            </div>
          </div>
          <Button variant="secondary" onClick={logout}>
            {" "}
            Logout
          </Button>
        </aside>
        <div className={s["tasks-list"]}>
          {isLoading && <p>Loading...</p>}
          {tasks.length > 0 &&
            sortedTasks.map((task) => (
              <div key={task.id} className={s["task-wrapper"]}>
                <div className={s["task-data"]}>
                  <input
                    type="checkbox"
                    id={task.id}
                    checked={task.completed}
                    onChange={() => handleEdit(task.id)}
                  />
                  <div className={s["title-wrapper"]}>
                    <label htmlFor={task.id} className={s["task-title"]}>
                      {task.title}
                    </label>
                    <small className={s["task-due_date"]}>
                      {task["due_date"]}
                    </small>
                  </div>
                </div>
                <div className={s.actions}>
                  <button onClick={() => handleImportant(task.id)}>
                    <BadgeAlert />
                  </button>
                  <button onClick={() => handleDelete(task.id)}>
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Authenticated;

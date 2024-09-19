import { useEffect, useState } from "react";
import { Task, taskService } from "../../api/task";
import reactLogo from "../../assets/react.svg";
import './styles.css';
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const navigate = useNavigate();

    const navigateCreateTask = () => {
        navigate('criar-tarefa');
    }
    const navigateViewTask = (id: string) => {
        navigate(`visualizar-tarefa?id=${id}`)

    }

    useEffect(() => {
        (async () => {
            const data = await taskService.getAll();
            setTasks(data);
        })()

    }, [])

    return (
        <div>
            <img src={reactLogo} className="logo react" alt="React logo" />
            <h1>ToDo List - Newm</h1>
            <button onClick={navigateCreateTask}>Criar Tarefa</button>
            <ul className="task-list">
                {tasks.map(task => (
                    <li>
                        <span>{task.title}</span>
                        <span><b>Status:</b> {task.status}</span>
                        <button onClick={() => navigateViewTask(task.id)}> Visualizar </button>
                    </li>
                ))}
            </ul>
        </div>

    )


}

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { Task, taskService } from "../../api/task";
export const ViewTaskPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [task, setTask] = useState<Task>();
    const id = searchParams.get('id');
    const backHome = () => {
        navigate('/');
    }

    useEffect(() => {
        if (!id) return;
        (async () => {
            const data = await taskService.getById(id);
            setTask(data);
        })()
    }, [])


    return (
        <div>
            <button onClick={backHome}>Voltar</button>
            <h1>Visualizar Tarefa  </h1>
            {!task ?
                <h3>Tarefa não existe</h3> :
                <div>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <span>Status: {task.status}</span>
                </div>

            }
        </div>
    )

}
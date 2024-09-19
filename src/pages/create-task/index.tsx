import { useState } from "react";
import { taskService } from "../../api/task";
import { useNavigate } from "react-router-dom";
import './styles.css';

export const CreateTaskPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Não iniciado");
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    }

    const saveTask = async (e: any) => {
        e.preventDefault();
        await taskService.create({
            title,
            description,
            status,
        })
        backHome();

    }

    return (
        <div>
            <button onClick={backHome}>Voltar</button>
            <h1>Criar Tarefa</h1>
            <form onSubmit={saveTask} className="task-form">
                <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                <select value={status} onChange={(e) => setStatus(e.target.value)} >
                    <option>Não iniciado </option>
                    <option>Em andamento </option>
                    <option>Concluído </option>
                </select>
                <button type="submit">Enviar</button>

            </form>
        </div>
    )

}
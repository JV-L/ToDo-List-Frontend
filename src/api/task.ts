const host = import.meta.env.VITE_API_HOST;
export type Task = {
    id: string;
    title: string;
    description: string;
    status: string;
}

export const taskService = {
    getAll: async () => {
        const response = await fetch(`${host}/Tasks`)
        return response.json();
    },
    create: async (task: {
        title: string;
        description: string;
        status: string;
    }) => {
        const response = await fetch(`${host}/Tasks`, {
            body: JSON.stringify(task),
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    },
    getById: async (id: string) => {
        const response = await fetch(`${host}/Tasks/${id}`);
        return response.json();

    }

}
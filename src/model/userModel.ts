
interface User {
    id: number;
    name: string;
    email: string;
}

const userCollection: User[] = [
    { id: 1, name: 'Jhon Doe', email: 'jane@example.com' },
    { id: 2, name: 'John Smith', email: 'john@example.com' }
]

export function listUsers() {
    return userCollection;
}
export default function Users() {
    const users = [
        { id: 3, name: 'Adham', },
        { id: 6, name: 'A.Ashraf', },
        { id: 2, name: 'Dina', },
        { id: 5, name: 'A.Mansour', },
        { id: 1, name: 'Marwan', },
        { id: 4, name: 'Kareem', },
    ];

    return (

        <ul className="p-5" test='asd'>
            {
                users.map(user => <li key={user.id}>{user.name}</li>)
            }
        </ul>
    )
}
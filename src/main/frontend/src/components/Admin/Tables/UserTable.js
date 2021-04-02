import DataTable from "react-data-table-component";

const columns = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Username',
        selector: 'username',
        sortable: true,
    },
    {
        name: 'Roles',
        selector: 'roles',
        sortable: true,
    },
]

const data = [
    {
        id: 1,
        username: 'Dos',
        roles: ['Admin, ', 'Moderator, ', 'User']
    },
    {
        id: 2,
        username: 'John',
        roles: ['Moderator, ', 'User']
    },
    {
        id: 3,
        username: 'Doe',
        roles: ['User']
    },
]

export default function UserTable(props) {
    return (
        <DataTable
            columns={columns}
            data={data}
            title={'Users'}
            pagination
            paginationComponentOptions={props.paginationOptions}
        />


        // <table className="table" id="table">
        //     <thead>
        //     <tr>
        //         <th>ID</th>
        //         <th>Username</th>
        //         <th>Roles</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     <tr>
        //         <td>1</td>
        //         <td>Dos</td>
        //         <td>
        //             <span className="d-block">Admin</span>
        //             <span className="d-block">Moderator</span>
        //             <span className="d-block">User</span>
        //         </td>
        //     </tr>
        //     <tr>
        //         <td>1</td>
        //         <td>Dos</td>
        //         <td>
        //             <span className="d-block">Admin</span>
        //             <span className="d-block">Moderator</span>
        //             <span className="d-block">User</span>
        //         </td>
        //     </tr>
        //     <tr>
        //         <td>1</td>
        //         <td>Dos</td>
        //         <td>
        //             <span className="d-block">Admin</span>
        //             <span className="d-block">Moderator</span>
        //             <span className="d-block">User</span>
        //         </td>
        //     </tr>
        //     </tbody>
        // </table>
    )
}

import DataTable from "react-data-table-component";

const columns = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    }
]

const data = [
    {
        id: 1,
        name: 'Admin'
    },
    {
        id: 2,
        name: 'Moderator'
    },
    {
        id: 3,
        name: 'User'
    },
]

const paginationOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All'
}

export default function RoleTable() {
    return (
        <DataTable
            columns={columns}
            data={data}
            title={'Roles'}
            pagination
            paginationComponentOptions={paginationOptions}
        />
    )
}

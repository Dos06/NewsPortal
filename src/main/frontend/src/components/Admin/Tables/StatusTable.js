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
        name: 'In progress'
    },
    {
        id: 2,
        name: 'Done'
    },
]

export default function StatusTable(props) {
    return (
        <DataTable
            columns={columns}
            data={data}
            title={'Statuses'}
            pagination
            paginationComponentOptions={props.paginationOptions}
        />
    )
}

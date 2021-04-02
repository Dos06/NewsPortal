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
        name: 'Mobile Dev'
    },
    {
        id: 2,
        name: 'Backend'
    },
    {
        id: 3,
        name: 'Frontend'
    },
]

export default function CategoryTable(props) {
    return (
        <DataTable
            columns={columns}
            data={data}
            title={'Categories'}
            pagination
            paginationComponentOptions={props.paginationOptions}
        />
    )
}

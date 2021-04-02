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
        name: 'Java'
    },
    {
        id: 2,
        name: 'Spring'
    },
    {
        id: 3,
        name: 'React'
    },
]

export default function TechnologyTable(props) {
    return (
        <DataTable
            columns={columns}
            data={data}
            title={'Technologies'}
            pagination
            paginationComponentOptions={props.paginationOptions}
        />
    )
}

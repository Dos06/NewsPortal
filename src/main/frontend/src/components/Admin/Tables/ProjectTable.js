import DataTable from "react-data-table-component";

const columns = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
    }
]

const data = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet.'
    },
]

export default function ProjectTable(props) {
    return (
        <DataTable
            columns={columns}
            data={data}
            title={'Projects'}
            pagination
            paginationComponentOptions={props.paginationOptions}
        />
    )
}

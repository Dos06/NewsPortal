import DataTable from "react-data-table-component";

const columns = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Surname',
        selector: 'surname',
        sortable: true,
    },
]

const data = [
    {
        id: 1,
        name: 'Dos',
        surname: 'Dos',
        email: 'dos@gmail.com'
    },
    {
        id: 2,
        name: 'Boss',
        surname: 'Boss',
        email: 'boss@gmail.com'
    },
    {
        id: 3,
        name: 'Less',
        surname: 'Sass',
        email: 'less@gmail.com'
    },
]

export default function ProgrammerTable(props) {
    return (
        <DataTable
            columns={columns}
            data={data}
            title={'Programmers'}
            pagination
            paginationComponentOptions={props.paginationOptions}
        />
    )
}

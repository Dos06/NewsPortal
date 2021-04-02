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
        name: 'HTML'
    },
    {
        id: 2,
        name: 'CSS'
    },
    {
        id: 3,
        name: 'JavaScript'
    },
]

export default function SkillTable(props) {
    return (
        <DataTable
            columns={columns}
            data={data}
            title={'Skills'}
            pagination
            paginationComponentOptions={props.paginationOptions}
        />
    )
}

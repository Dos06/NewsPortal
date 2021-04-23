import DataTable from "react-data-table-component";
import {Button} from "react-bootstrap";
import React from "react";

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
        <>
            <Button variant={'dark'} size={'lg'} className="mx-3 my-2">ADD</Button>
            <DataTable
                columns={columns}
                data={data}
                title={'Projects'}
                pagination
                paginationComponentOptions={props.paginationOptions}
            />
        </>
    )
}

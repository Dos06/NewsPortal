import DataTable from "react-data-table-component";
import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import DbService, {TABLE_CATEGORIES} from "../../../_services/DbService";

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

export default function CategoryTable(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);

    const loadData = () => {
        DbService.getAllByTable(TABLE_CATEGORIES).then(response => {
            setData((response.data).map(item => {
                return {
                    id: item.id,
                    name: item.category,
                }
            }))
        })
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <Button variant={'dark'} size={'lg'} className="mx-3 my-2" onClick={handleShow}>ADD</Button>
            <DataTable
                columns={columns}
                data={data}
                title={'Categories'}
                pagination
                paginationComponentOptions={props.paginationOptions}
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add to {TABLE_CATEGORIES}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Category name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" required/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CLOSE
                    </Button>
                    <Button variant="dark" onClick={handleClose}>
                        SAVE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

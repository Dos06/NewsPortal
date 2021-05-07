import DataTable from "react-data-table-component";
import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import DbService, {ADD, DELETE, TABLE_TECHNOLOGIES} from "../../../_services/DbService";

export default function TechnologyTable(props) {
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
        },
        {
            right: true,
            cell: (row) => <>
                <Button variant={'dark'} className={'mr-2'} onClick={() => {
                    // editItem(row.id)
                }}>EDIT</Button>
                <Button variant={'danger'} onClick={() => {
                    deleteItem(row.id)
                }}>DELETE</Button>
            </>
        }
    ]

    async function deleteItem(id) {
        DbService.changeItem(DELETE, TABLE_TECHNOLOGIES, id)
            .then(_ => loadData())
            .catch(e => console.log(e))
    }

    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [img, setImg] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);

    const loadData = () => {
        DbService.getAllByTable(TABLE_TECHNOLOGIES).then(response => {
            console.log(response.data)
            setData((response.data).map(item => {
                return {
                    id: item.id,
                    name: item.technology,
                    img: item.icon,
                }
            }))
        })
    }

    useEffect(() => {
        loadData()
    }, [])

    const onChangeName = event => {
        setName(event.target.value);
    }
    const onChangeImg = event => {
        setImg(event.target.value);
    }
    const onSubmitForm = event => {
        const data = {name, img}
        addItem(data)
            .then(_ => {
                setName('')
                setImg('')
            })
            .catch(e => console.log(e))
        event.preventDefault()
    }

    async function addItem(data) {
        DbService.changeItem(ADD, TABLE_TECHNOLOGIES, data)
            .then(_ => loadData())
            .catch(e => console.log(e))
    }

    return (
        <>
            <Button variant={'dark'} size={'lg'} className="mx-3 my-2" onClick={handleShow}>ADD</Button>
            <DataTable
                columns={columns}
                data={data}
                title={'Technologies'}
                pagination
                paginationComponentOptions={props.paginationOptions}
            />

            <Modal show={show} animation={false} onHide={handleClose}>
                <Form onSubmit={onSubmitForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add to {TABLE_TECHNOLOGIES}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={onChangeName}
                                type="text"
                                placeholder="Enter name"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image URL:</Form.Label>
                            <Form.Control
                                value={img}
                                onChange={onChangeImg}
                                type="text"
                                placeholder="Enter image URL"
                                required
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            CLOSE
                        </Button>
                        <Button variant="dark" type={'submit'}>
                            SAVE
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

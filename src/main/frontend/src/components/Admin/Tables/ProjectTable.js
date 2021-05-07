import DataTable from "react-data-table-component";
import {Button, Form, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import DbService, {ADD, DELETE, TABLE_CATEGORIES, TABLE_PROJECTS} from "../../../_services/DbService";
import Select from "react-select";

export default function ProjectTable(props) {
    const [optionCategories, setOptCats] = useState([])
    const [categs, setCategs] = useState([])

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
        DbService.changeItem(DELETE, TABLE_PROJECTS, id)
            .then(_ => loadData())
            .catch(e => console.log(e))
    }

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [body, setBody] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);

    const loadData = () => {
        DbService.getAllByTable(TABLE_PROJECTS).then(response => {
            setData((response.data).map(item => {
                return {
                    id: item.id,
                    title: item.title,
                }
            }))
        })
        DbService.getAllByTable(TABLE_CATEGORIES).then(response => {
            setCategories((response.data).map(item => {
                return {
                    id: item.id,
                    name: item.category,
                }
            }))
            setOptCats((response.data).map(item => {
                return {
                    value: item.id,
                    label: item.category,
                }
            }))
        })
    }

    useEffect(() => {
        loadData()
    }, [])

    const onChangeTitle = event => {
        setTitle(event.target.value);
    }
    const onChangeImg = event => {
        setImg(event.target.value);
    }
    const onChangeShortDesc = event => {
        setShortDesc(event.target.value);
    }
    const onChangeBody = event => {
        setBody(event.target.value);
    }
    const onSubmitForm = event => {
        let cats = []
        for (let i = 0; i < categs.length; i++) {
            cats.push(categs[i].value)
        }
        const data = {title, img, shortDesc, body, cats}
        addItem(data)
            .then(_ => {
                setTitle('')
                setImg('')
                setShortDesc('')
                setBody('')
            })
            .catch(e => console.log(e))
        event.preventDefault()
    }

    async function addItem(data) {
        DbService.changeItem(ADD, TABLE_PROJECTS, data)
            .then(_ => loadData())
            .catch(e => console.log(e))
    }

    return (
        <>
            <Button variant={'dark'} size={'lg'} className="mx-3 my-2" onClick={handleShow}>ADD</Button>
            <DataTable
                columns={columns}
                data={data}
                title={'Projects'}
                pagination
                paginationComponentOptions={props.paginationOptions}
            />

            <Modal show={show} animation={false} onHide={handleClose}>
                <Form onSubmit={onSubmitForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add to {TABLE_PROJECTS}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                value={title}
                                onChange={onChangeTitle}
                                type="text"
                                placeholder="Enter title"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category:</Form.Label>
                            <Select options={optionCategories} onChange={setCategs} isMulti autoFocus/>
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
                        <Form.Group>
                            <Form.Label>Short description:</Form.Label>
                            <Form.Control
                                as={'textarea'}
                                rows={3}
                                value={shortDesc}
                                onChange={onChangeShortDesc}
                                type="text"
                                placeholder="Enter short description"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Content:</Form.Label>
                            <Form.Control
                                as={'textarea'}
                                rows={10}
                                value={body}
                                onChange={onChangeBody}
                                type="text"
                                placeholder="Enter content"
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

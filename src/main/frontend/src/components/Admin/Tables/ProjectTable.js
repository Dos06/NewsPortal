import DataTable from "react-data-table-component";
import {Button, Form, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import DbService, {
    ADD,
    DELETE,
    TABLE_CATEGORIES,
    TABLE_PROGRAMMERS,
    TABLE_PROJECTS, TABLE_TECHNOLOGIES
} from "../../../_services/DbService";
import Select from "react-select";

export default function ProjectTable(props) {
    const [optionCategories, setOptCats] = useState([])
    const [categs, setCategs] = useState([])
    const [optionProgrammers, setOptProgs] = useState([])
    const [progs, setProgs] = useState([])
    const [optionTechnologies, setOptTechs] = useState([])
    const [techs, setTechs] = useState([])

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
    const [programmers, setProgrammers] = useState([]);
    const [technologies, setTechnologies] = useState([]);

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
        DbService.getAllByTable(TABLE_PROGRAMMERS).then(response => {
            setProgrammers((response.data).map(item => {
                return {
                    id: item.id,
                    name: item.name + ' ' + item.last_name,
                }
            }))
            setOptProgs((response.data).map(item => {
                return {
                    value: item.id,
                    label: item.name + ' ' + item.last_name,
                }
            }))
        })
        DbService.getAllByTable(TABLE_TECHNOLOGIES).then(response => {
            console.log(response.data)
            setTechnologies((response.data).map(item => {
                return {
                    id: item.id,
                    name: item.technology,
                }
            }))
            setOptTechs((response.data).map(item => {
                return {
                    value: item.id,
                    label: item.technology,
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
        let categoryIds = []
        let programmerIds = []
        let technologyIds = []
        for (let i = 0; i < categs.length; i++) {
            categoryIds.push(categs[i].value)
        }
        for (let i = 0; i < progs.length; i++) {
            programmerIds.push(progs[i].value)
        }
        for (let i = 0; i < techs.length; i++) {
            technologyIds.push(techs[i].value)
        }
        const data = {title, img, shortDesc, body, categoryIds, programmerIds, technologyIds}
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
                            <Form.Label>Authors:</Form.Label>
                            <Select options={optionProgrammers} onChange={setProgs} isMulti/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Technologies:</Form.Label>
                            <Select options={optionTechnologies} onChange={setTechs} isMulti/>
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
                                rows={2}
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
                                rows={5}
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

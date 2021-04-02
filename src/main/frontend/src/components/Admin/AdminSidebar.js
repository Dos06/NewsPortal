import {Link} from "react-router-dom";
import React from "react";

export default function AdminSidebar() {
    return (<div className="side-bar">
            <div className="side-bar-links">
                <div className="side-bar-logo text-center py-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png"
                        className="img-fluid rounded-circle border bg-secoundry mb-3" alt='img'/>
                    <h5>D & B</h5>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-links d-block">
                            <i className="fa fa-home pr-2"/> HOME
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/projects" className="nav-links d-block">
                            <i className="fa fa-folder-open pr-2"/> PROJECTS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/users" className="nav-links d-block">
                            <i className="fa fa-users pr-2"/> USERS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/programmers" className="nav-links d-block">
                            <i className="fa fa-file-code pr-2"/> PROGRAMMERS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/roles" className="nav-links d-block">
                            <i className="fa fa-hand-peace pr-2"/> ROLES
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/categories" className="nav-links d-block">
                            <i className="fa fa-list-alt pr-2"/> CATEGORIES
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/technologies" className="nav-links d-block">
                            <i className="fa fa-compass pr-2"/> TECHNOLOGIES
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/skills" className="nav-links d-block">
                            <i className="fa fa-lightbulb pr-2"/> SKILLS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/statuses" className="nav-links d-block">
                            <i className="fa fa-moon pr-2"/> STATUSES
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="side-bar-icons">
                <div className="icons d-flex flex-column align-items-center">
                    <Link to="/" className="set-width text-center display-inline-block my-1">
                        <i className="fa fa-home"/>
                    </Link>
                    <Link to="/admin/projects" className="set-width text-center display-inline-block my-1">
                        <i className="fa fa-folder-open"/>
                    </Link>
                    <Link to="/admin/users" className="set-width text-center display-inline-block my-1">
                        <i className="fa fa-users"/>
                    </Link>
                    <Link to="/admin/programmers" className="set-width text-center display-inline-block my-1">
                        <i className="fa fa-file-code"/>
                    </Link>
                    <Link to="/admin/roles" className="set-width text-center display-inline-block my-1">
                        <i className="fa fa-hand-peace"/>
                    </Link>
                    <Link to="/admin/categories" className="set-width text-center display-inline-block my-1">
                        <i className="fa fa-list-alt"/>
                    </Link>
                    <Link to="/admin/technologies" className="set-width text-center display-inline-block my-1">
                        <i className="fa fa-compass"/>
                    </Link>
                    <Link to="/admin/skills" className="set-width text-center display-inline-block my-1">
                        <i className="fa fa-lightbulb"/>
                    </Link>
                    <Link to="/admin/statuses" className="set-width text-center display-inline-block my-1">
                        <i className="fa fa-moon"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
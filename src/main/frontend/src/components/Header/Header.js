import React from 'react'
import $ from 'jquery'
import {NavDropdown} from "react-bootstrap"

class Header extends React.Component{

    componentDidMount() {
        $('.search-box').hover(function () {
            $(this).width('250px');
            $(this).find('input').show();
            $(this).find('button[type="submit"]').width('12.8%');
        }, function () {
            if (!($(this).find('input').is(':focus'))) {
                $(this).removeAttr('style');
                $(this).find('input').removeAttr('style');
                $(this).find('button[type="submit"]').removeAttr('style');
            }
        });

        $('.search-box').find('input').blur(function () {
            $('.search-box').removeAttr('style');
            $('.search-box').find('input').removeAttr('style');
            $('.search-box').find('button[type="submit"]').removeAttr('style');
        });
    }

    render() {
        return (
            <header className="position-relative">
                <nav className="navbar navbar-expand-lg main-nav position-absolute">

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            onClick="test()">
                        <i className="fas fa-bars"/>
                    </button>

                    <div className="collapse navbar-collapse w-100 m-auto" id="navbarSupportedContent">
                        <div className="nav-soc">
                            <ul className="d-flex justify-content-between">
                                <li><i className="fas fa-phone-alt"/></li>
                                <li><i className="fab fa-vk"/></li>
                                <li><i className="fab fa-github"/></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav d-flex align-items-center m-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <NavDropdown title="Categories" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#">Mobile Dev</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Backend</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Frontend</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li className="brand-box">
                                <a href="/" className="logo"><span className="logo_D">D</span><span
                                    className="logo_and">&</span><span
                                    className="logo_R">B</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <NavDropdown title="Our Team" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#">Dosbol Bakhtiyar</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Dosbol Bakhtiyar</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Dosbol Bakhtiyar</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li className="nav-item dropdown">
                                <NavDropdown title="Language" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#">English</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Русский</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                        </ul>
                        <form action="#" method="get" className="align-items-center m-0">
                            <div className="search-box--end">
                                <div className="search-box">
                                    <div className="search-box--inner">
                                        <input type="text" name="q"/>
                                        <button type="submit">
                                            <i className="fa fa-search" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header

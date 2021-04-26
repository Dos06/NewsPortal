import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <hr className="mt-4 hr-border"/>
                <div className="row p-0">
                    <div className="col-12 p-0 m-0">
                        <div className="tags-box text-center w-100 p-3">
                            <Link to={'/'} className="tag">HTML</Link>
                            <Link to={'/'} className="tag">CSS</Link>
                            <Link to={'/'} className="tag">JavaScript</Link>
                            <Link to={'/'} className="tag">Java</Link>
                            <Link to={'/'} className="tag">Spring</Link>
                            <Link to={'/'} className="tag">Dart</Link>
                            <Link to={'/'} className="tag">SQL</Link>
                        </div>
                    </div>
                </div>
                <hr className="mt-3 hr-border"/>

                <div className="m-auto reserved">
                    <p className="text-light m-auto text-center">© {new Date().getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

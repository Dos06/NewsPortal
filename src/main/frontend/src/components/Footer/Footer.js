const Footer = () => {
    return (
        <footer>
            <div className="container">
                <hr className="mt-4 hr-border"/>
                <div className="row p-0">
                    <div className="col-12 p-0 m-0">
                        <div className="tags-box text-center w-100 p-3">
                            <a href={'#'} className="tag">HTML</a>
                            <a href={'#'} className="tag">CSS</a>
                            <a href={'#'} className="tag">JavaScript</a>
                            <a href={'#'} className="tag">Java</a>
                            <a href={'#'} className="tag">Spring</a>
                            <a href={'#'} className="tag">Dart</a>
                            <a href={'#'} className="tag">SQL</a>
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

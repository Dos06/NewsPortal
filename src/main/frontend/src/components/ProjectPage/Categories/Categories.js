export default function Categories() {
    return (
        <div className="card mb-3 mt-2">
            <h5 className="card-header">Categories</h5>
            <div className="card-body">
                <div className="row">
                    <ul className="list-unstyled mb-0 d-flex flex-wrap">
                        <li className="col-lg-6">
                            <a href="#">Analytics</a>
                        </li>
                        <li className="col-lg-6">
                            <a href="#">Web</a>
                        </li>
                        <li className="col-lg-6">
                            <a href="#">Mobile Dev</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
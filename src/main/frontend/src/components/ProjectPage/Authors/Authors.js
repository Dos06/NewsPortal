import CardAuthor from "./CardAuthor";

export default function Authors() {
    return (
        <div className="card mb-3 mt-2">
            <h5 className="card-header">Developed by</h5>
            <div className="card-body">
                <div className="row">
                    <ul className="list-unstyled mb-0 d-flex flex-wrap">
                        <li className="col-lg-4">
                            <CardAuthor/>
                        </li>
                        <li className="col-lg-4">
                            <CardAuthor/>
                        </li>
                        <li className="col-lg-4">
                            <CardAuthor/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
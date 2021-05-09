import {Link} from "react-router-dom";

export default function Categories(props) {
    let categories = props.categories

    return (
        <div className="card mb-3 mt-2">
            <h5 className="card-header">Categories</h5>
            <div className="card-body">
                <div className="row">
                    {!categories ? '' : categories.map(c => {
                        return (
                            <Link key={`c${c.id}`} to={`/?category=${c.id}`} className={'col-4'}>{c.category}</Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
import {Link} from "react-router-dom";

export default function SidePost() {
    return (
        <div className="popular-row">
            <div className="col-12">
                <div className="popular-post-title">
                    <p>
                        Analytics, Mobile Dev, Backend, Frontend
                    </p>
                    <Link to={"/project/1"}>
                        <h5>Lorem ipsum dolor sit amet, consectetur</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

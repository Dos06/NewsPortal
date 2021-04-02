import {Link} from "react-router-dom";

const Post = () => {
    return (
        <div className="col-lg-4 col-12 col-md-6 p-1 p-md-3">
            <div className="home_post_card p-0" style={{backgroundImage: 'url(\'https://s23527.pcdn.co/wp-content/uploads/2019/02/moon-1-745x517.jpg.optimal.jpg\')'}}>
                <div className="home_post_card_info">
                    <div>
                        <span className="home_post_card_cat_name">Analytics</span>
                        <span className="home_post_card_cat_name">Development</span>
                        <span className="home_post_card_cat_name">Game-Dev</span>
                        <span className="home_post_card_cat_name">Web</span>
                        <p>
                            <Link to={"/project/1"} className="home_post_card_title">
                                Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </Link>
                            <span className="home_post_card_author">
                                by <span><Link to={"/programmer/1"}>Dos</Link></span>
                            </span>
                        </p>
                    </div>
                    <div className="home_post_card_info_bottom">
                        <span className="text-nowrap m-2"><i className="far fa-eye ml-1"/> 45 </span>
                        <span className="text-nowrap m-2">
                            <a className="btnModifyLike">
                                <i className="fa fa-heart ml-1" id="likeIcon1"/>
                                <span id="likeCount1"> 11 </span>
                            </a>
                        </span>

                        <p className="home_post_card_pubdate">31 March 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post

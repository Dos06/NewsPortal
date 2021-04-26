import Post from "../Post/Post";
import {useEffect, useState} from "react";
import DbService, {TABLE_PROJECTS} from "../../../_services/DbService";

const LatestPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        DbService.getAllByTable(TABLE_PROJECTS)
            .then(r => {
                setPosts(r.data)
            })
    }, [])

    return (
        <section className="home_latest_post">
            <h2>Our Latest Posts</h2>
            <div className="container">
                <div className="row mt-5">

                    {posts.map(p => {
                        return <Post key={p.id}
                                     id={p.id}
                                     img={p.imgPath}
                                     title={p.title}
                                     shortDescription={p.shortDescription}
                                     body={p.body}
                                     date={p.createdAt}
                                     categories={p.category}
                        />
                    })}

                </div>
            </div>
        </section>
    )
}

export default LatestPosts

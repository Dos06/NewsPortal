import Post from "../Post/Post";

const LatestPosts = () => {
    return (
        <section className="home_latest_post">
            <h2>Our Latest Posts</h2>
            <div className="container">
                <div className="row mt-5">

                    <Post/>
                    <Post/>
                    <Post/>

                </div>
            </div>
        </section>
    )
}

export default LatestPosts

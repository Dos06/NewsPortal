import SideTopPosts from "./SideTopPosts/SideTopPosts";
import Authors from "./Authors/Authors";
import Technologies from "./Technologies/Technologies";
import Categories from "./Categories/Technologies";

export default function ProjectPage() {
    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-12 col-lg-8">
                    <div className="container-fluid mt-2"
                         style={{
                             minHeight: '500px',
                             backgroundImage: 'url(\'https://s23527.pcdn.co/wp-content/uploads/2019/02/moon-1-745x517.jpg.optimal.jpg\')',
                             backgroundRepeat: 'no-repeat',
                             backgroundSize: 'auto'
                         }}>
                    </div>

                    <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
                    <span className="home_post_card_pubdate mr-2">31 March 2021</span>

                    <form id="likeForm1" action="#" method="get" hidden>

                    </form>

                    <a className="btnModifyLike" type="button" onClick={() => {
                        /* add like */
                    }}>
                        <i className="fa fa-heart ml-1" id="likeIcon1"/> <span id="likeCount1"> 11</span>
                    </a>

                    <span className="text-nowrap m-2">
                        <i className="far fa-eye ml-1"/> 45
                    </span>

                    <div className="mt-3 mb-3">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aspernatur cum
                            cumque delectus eaque exercitationem explicabo, facere fuga in inventore ipsam iste itaque
                            iure iusto molestias obcaecati placeat quae quam quidem quo sint sunt suscipit totam vitae!
                            Alias aliquid blanditiis delectus deleniti dicta dolor dolorem doloremque enim eos error
                            esse eum excepturi, hic incidunt, iste iure laboriosam minus necessitatibus non provident
                            rerum sint suscipit tenetur! A alias aperiam consequatur deleniti dolores earum eligendi
                            enim eos error excepturi facilis impedit inventore ipsam, magni, minima nam neque odio
                            perspiciatis praesentium quae quaerat repellat repudiandae rerum soluta suscipit voluptates
                            voluptatibus! Nulla, porro!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aspernatur cum
                            cumque delectus eaque exercitationem explicabo, facere fuga in inventore ipsam iste itaque
                            iure iusto molestias obcaecati placeat quae quam quidem quo sint sunt suscipit totam vitae!
                            Alias aliquid blanditiis delectus deleniti dicta dolor dolorem doloremque enim eos error
                            esse eum excepturi, hic incidunt, iste iure laboriosam minus necessitatibus non provident
                            rerum sint suscipit tenetur! A alias aperiam consequatur deleniti dolores earum eligendi
                            enim eos error excepturi facilis impedit inventore ipsam, magni, minima nam neque odio
                            perspiciatis praesentium quae quaerat repellat repudiandae rerum soluta suscipit voluptates
                            voluptatibus! Nulla, porro!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aspernatur cum
                            cumque delectus eaque exercitationem explicabo, facere fuga in inventore ipsam iste itaque
                            iure iusto molestias obcaecati placeat quae quam quidem quo sint sunt suscipit totam vitae!
                            Alias aliquid blanditiis delectus deleniti dicta dolor dolorem doloremque enim eos error
                            esse eum excepturi, hic incidunt, iste iure laboriosam minus necessitatibus non provident
                            rerum sint suscipit tenetur! A alias aperiam consequatur deleniti dolores earum eligendi
                            enim eos error excepturi facilis impedit inventore ipsam, magni, minima nam neque odio
                            perspiciatis praesentium quae quaerat repellat repudiandae rerum soluta suscipit voluptates
                            voluptatibus! Nulla, porro!
                        </div>
                    </div>

                    <span className="home_post_card_pubdate mr-2">
                        31 March 2021
                    </span>

                    <span className="text-nowrap m-2">
                        <i className="far fa-eye ml-1"/> 45
                    </span>

                    <div className="mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut debitis distinctio et
                        maiores minus quam qui quisquam repellat reprehenderit sed sunt! Aliquam aut cupiditate dolor,
                        inventore libero magnam mollitia necessitatibus, nihil nobis placeat quis ullam voluptatibus!
                        Asperiores dignissimos, eius enim eos, in ipsam, magni non odit saepe tenetur totam!
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <Categories/>
                    <Technologies/>
                    <Authors/>
                    <SideTopPosts/>
                </div>
            </div>
        </div>
    )
}

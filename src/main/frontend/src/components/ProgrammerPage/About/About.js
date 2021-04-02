export default function About() {
    return (
        <div className="card-box text-center">
            <img
                src="https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                className="rounded-circle avatar-xl img-thumbnail" alt="profile-image"/>
            <p className="mb-0">Elon Musk</p>
            <p className="text-left">
                <span className="ml-1">Email</span>:
                <span className="ml-1">elon@gmail.com</span>
            </p>
            <p className="text-left">
                <span className="ml-1">LinkedIn</span>:
                <span className="ml-1">elon@gmail.com</span>
            </p>
            <p className="text-left">
                <span className="ml-1">GitHub</span>:
                <span className="ml-1">Elon</span>
            </p>
            <div className=" mt-3" style={{float: 'left'}}>
                <p>
                    <strong className="font-13">About Me :</strong>
                    <br/>
                    <span>Hi I am a Software Developer</span>
                </p>
            </div>
            <ul className="social-list list-inline mt-3 mb-0">
                <li className="list-inline-item">
                    <a href="https://github.com/"
                       className="social-list-item border-secondary text-secondary">
                        <i className="fab fa-github"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
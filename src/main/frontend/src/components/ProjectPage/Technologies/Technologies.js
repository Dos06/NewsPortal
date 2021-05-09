export default function Technologies(props) {
    let technologies = props.technologies

    return (
        <div className="card mb-3 mt-2">
            <h5 className="card-header">Technologies</h5>
            <div className="card-body">
                <div className="row">
                    <ul className="list-unstyled mb-0 d-flex flex-wrap col-12">
                        {!technologies ? '' : technologies.map(t => {
                            return (
                                <img key={`t${t.id}`} className="tech-icon col-lg-3 my-2" src={t.icon} alt="img"/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
import SkillListItem from "./SkillListItem";

export default function Skills() {
    return (
        <div className="card-box">
            <p className="header-title">
                <strong> Skills </strong>
            </p>
            <SkillListItem/>
            <hr/>
            <SkillListItem/>
            <hr/>
            <SkillListItem/>
        </div>
    )
}
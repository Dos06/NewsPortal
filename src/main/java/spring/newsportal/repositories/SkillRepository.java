package spring.newsportal.repositories;

import spring.newsportal.entities.models.SkillEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends JpaRepository<SkillEntity, Long> {
//    List<SkillEntity> findAllByProgrammer(ProgrammerEntity programmer);
}

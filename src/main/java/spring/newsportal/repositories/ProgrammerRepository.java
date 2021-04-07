package spring.newsportal.repositories;

import spring.newsportal.entities.models.ProgrammerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProgrammerRepository extends JpaRepository<ProgrammerEntity, Long> {
}

package spring.newsportal.services;

import spring.newsportal.entities.models.ProjectStatusEntity;

import java.util.List;

public interface ProjectStatusService {
    void addFromController(String name);
    void updateFromController(Long id, String name);
    void deleteFromController(Long id);

    ProjectStatusEntity getProjectStatusById(long id);
    ProjectStatusEntity add(ProjectStatusEntity projectStatus);
    ProjectStatusEntity save(ProjectStatusEntity projectStatus);
    void delete(ProjectStatusEntity projectStatus);
    List<ProjectStatusEntity> getAllProjectStatuses();
}

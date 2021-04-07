package spring.newsportal.services;

import spring.newsportal.entities.models.CategoryEntity;

import java.util.List;

public interface CategoryService {
    void addFromController(String name);
    void updateFromController(Long id, String name);
    void deleteFromController(Long id);

    CategoryEntity add(CategoryEntity category);
    CategoryEntity save(CategoryEntity category);
    void delete(CategoryEntity category);
    List<CategoryEntity> getAllCategories();
    CategoryEntity getCategoryById(Long id);
}

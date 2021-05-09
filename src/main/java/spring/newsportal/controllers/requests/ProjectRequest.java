package spring.newsportal.controllers.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectRequest {
    private String title, img, shortDescription, body;
    private List<Long> categoryIds, programmerIds, technologyIds;
}

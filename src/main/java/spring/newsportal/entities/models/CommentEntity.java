package spring.newsportal.entities.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import spring.newsportal.entities.BaseEntity;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity(name = "comment")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentEntity extends BaseEntity {

    @Column(columnDefinition = "TEXT")
    private String comment;

    @ManyToOne(fetch = FetchType.LAZY)
    private Users author;
}

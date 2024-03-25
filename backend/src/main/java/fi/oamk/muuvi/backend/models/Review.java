package fi.oamk.muuvi.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User owner;
    private Long shareSlur;

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long favouriteId) {
        this.reviewId = favouriteId;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Long getShareSlur() {
        return shareSlur;
    }

    public void setShareSlur(Long shareSlur) {
        this.shareSlur = shareSlur;
    }
}

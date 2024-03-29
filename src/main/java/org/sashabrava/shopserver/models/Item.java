    package org.sashabrava.shopserver.models;

    import javax.persistence.Entity;
    import javax.persistence.GeneratedValue;
    import javax.persistence.GenerationType;
    import javax.persistence.Id;
    import lombok.Data;

    @Entity
    @Data
    public class Item {
        @Id
        @GeneratedValue(strategy= GenerationType.AUTO)
        private Integer id;

        private String title;

        private String description;

    }

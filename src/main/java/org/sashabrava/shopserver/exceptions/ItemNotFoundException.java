package org.sashabrava.shopserver.exceptions;

public class ItemNotFoundException extends RuntimeException {
    public ItemNotFoundException(Integer id) {
        super("Could not find item Id = " + id);
    }
}

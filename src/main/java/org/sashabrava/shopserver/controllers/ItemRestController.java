package org.sashabrava.shopserver.controllers;

import org.sashabrava.shopserver.exceptions.ItemNotFoundException;
import org.sashabrava.shopserver.models.Item;
import org.sashabrava.shopserver.models.ItemRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/items")
public class ItemRestController {

    private final ItemRepository itemRepository;

    public ItemRestController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @GetMapping("")
    List<Item> all() {
        return itemRepository.findAll();
    }

    @PostMapping("")
    Item newEmployee(@RequestBody Item newItem) {
        return itemRepository.save(newItem);
    }

    @GetMapping("/{id}")
    Item one(@PathVariable Integer id) {

        return itemRepository.findById(id)
                .orElseThrow(() -> new ItemNotFoundException(id));
    }
}

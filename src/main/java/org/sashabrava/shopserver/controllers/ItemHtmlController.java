package org.sashabrava.shopserver.controllers;

import org.sashabrava.shopserver.models.Item;
import org.sashabrava.shopserver.models.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "/test_item")
public class ItemHtmlController {

    @Autowired
    private ItemRepository itemRepository;

    @PostMapping(path = "/add")
    public @ResponseBody
    String addNewItem(@RequestParam String title
            , @RequestParam String description) {
        Item item = new Item();
        item.setTitle(title);
        item.setDescription(description);
        itemRepository.save(item);
        return "Item has been added";
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<Item> getAllItems() {
        return itemRepository.findAll();
    }
}


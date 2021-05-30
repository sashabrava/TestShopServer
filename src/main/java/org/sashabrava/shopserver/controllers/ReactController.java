package org.sashabrava.shopserver.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactController {
    @RequestMapping(value = {"/items/**"})
    public String index() {
        return "forward:/";
    }
}

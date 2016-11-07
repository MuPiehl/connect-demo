package de.mpi.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by matthias.piehl on 07.11.2016.
 */
@Controller
public class WebController {
    private static Logger log = LoggerFactory.getLogger(WebController.class);

//    @RequestMapping(value = {"/", "index"}, method = RequestMethod.GET)
    @RequestMapping(value = {"*"}, method = RequestMethod.GET)
    public String index(Model model) {

        model.addAttribute("dummy", "Test");
        log.debug("Index wird ausgeliefert");

        return "index";
    }
}

package de.mpi.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

/**
 * Created by matthias.piehl on 08.11.2016.
 */
@RestController
public class SliceController {
      private static Logger log = LoggerFactory.getLogger(SliceController.class);

    @RequestMapping(value = "demo/data",  method = RequestMethod.GET , produces = "application/json")
    public Slice getCurrentSlice(@RequestParam int sliceNumber){
        log.debug("getCurrentSlice sliceNumber: " + sliceNumber);

        return new Slice(sliceNumber);
    }
}

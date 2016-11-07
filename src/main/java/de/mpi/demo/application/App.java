package de.mpi.demo.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by matthias.piehl on 07.11.2016.
 */
@ComponentScan(basePackages = {"de.mpi.demo"})
@Configuration
@EnableAutoConfiguration
public class App {

    public static void main(String[] args) {

        SpringApplication.run(App.class);
    }
}

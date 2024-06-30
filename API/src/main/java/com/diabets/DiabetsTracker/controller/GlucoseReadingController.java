package com.diabets.DiabetsTracker.controller;
import com.diabets.DiabetsTracker.model.GlucoseReading;
import com.diabets.DiabetsTracker.services.GlucoseReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;


@CrossOrigin(origins = "http://localhost:55289")
@RestController
@RequestMapping("/api/glucose")
public class GlucoseReadingController {

    @Autowired
    private GlucoseReadingService glucoseReadingService;

    @GetMapping
    public List<GlucoseReading> getAllGlucoseReadings() {
        List<GlucoseReading> glucoseReadings = glucoseReadingService.getAllGlucoseReadings();
        return glucoseReadings;
    }

    @PostMapping
    public GlucoseReading saveGlucoseReading(@RequestBody GlucoseReading glucoseReading) {
        return glucoseReadingService.saveGlucoseReading(glucoseReading);
    }

    @PutMapping("/{id}")
    public GlucoseReading updateGlucoseReading(@RequestParam Long id , @RequestBody GlucoseReading glucoseReading) {
        glucoseReading.setGId(id);
        return glucoseReadingService.saveGlucoseReading(glucoseReading);
    }

    @DeleteMapping("/{id}")
    public void deleteGlucoseReadingById(@RequestParam Long id) {
        glucoseReadingService.deleteGlucoseReadingById(id);
    }

    @GetMapping("/{id}")
    public GlucoseReading getGlucoseReadingById(@PathVariable Long id) {
        return glucoseReadingService.getGlucoseReadingById(id);
    }
}

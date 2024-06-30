package com.diabets.DiabetsTracker.services;
import com.diabets.DiabetsTracker.Repository.GlucoseReadingRepository;
import com.diabets.DiabetsTracker.model.GlucoseReading;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class GlucoseReadingService {
    @Autowired
    GlucoseReadingRepository glucoseReadingRepository;

    public List<GlucoseReading> getAllGlucoseReadings() {
        return glucoseReadingRepository.findAll();
    }

    public GlucoseReading saveGlucoseReading(GlucoseReading glucoseReading) {
        return glucoseReadingRepository.save(glucoseReading);
    }

    public void deleteGlucoseReadingById(Long id) {
        glucoseReadingRepository.deleteById(id);

    }

    public GlucoseReading getGlucoseReadingById(Long id) {
        return glucoseReadingRepository.findById(id).orElse(null);
    }
}

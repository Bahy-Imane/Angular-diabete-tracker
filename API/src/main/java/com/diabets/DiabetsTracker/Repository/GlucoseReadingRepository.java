package com.diabets.DiabetsTracker.Repository;

import com.diabets.DiabetsTracker.model.GlucoseReading;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GlucoseReadingRepository extends JpaRepository<GlucoseReading, Long> {

}

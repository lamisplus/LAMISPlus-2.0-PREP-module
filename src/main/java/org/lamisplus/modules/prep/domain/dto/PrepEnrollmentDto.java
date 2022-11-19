package org.lamisplus.modules.prep.domain.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.lamisplus.modules.patient.domain.entity.Person;
import org.lamisplus.modules.patient.domain.entity.Visit;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;

@Builder(toBuilder = true)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class PrepEnrollmentDto implements Serializable {

    private String uniqueId;

    private String entryPoint;

    private String targetGroup;

    private String sourceOfReferrer;

    private Boolean pregnant;

    private Boolean breastfeeding;

    private LocalDate dateOfRegistration;

    private String statusAtRegistration;

    private Long enrollmentSetting;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dateStarted;

    private int archived;

    private String facilityName;

    private String careEntryPointOther;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dateOfLpm;

    private String pregnancyStatus;

    public Long personId;
}
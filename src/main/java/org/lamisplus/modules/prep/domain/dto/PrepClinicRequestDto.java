package org.lamisplus.modules.prep.domain.dto;


import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;


@Builder(toBuilder = true)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class PrepClinicRequestDto implements Serializable{
    private LocalDate  dateInitialAdherenceCounseling;

    @NotNull(message = "weight is mandatory")
    private Double weight;

    @NotNull(message = "height is mandatory")
    private Double height;

    private Boolean pregnant;

    private Boolean breastfeeding;

    @NotBlank(message = "prepEnrollmentUuid is mandatory")
    private String prepEnrollmentUuid;

    @NotNull(message = "regimenId is mandatory")
    private long regimenId;

    //private long regimenTypeId;

    private String urinalysisResult;

    private Boolean referred;

    private LocalDate dateReferred;

    @NotNull(message = "personId is mandatory")
    private Long personId;

    private LocalDate nextAppointment;

    private Object extra;
}


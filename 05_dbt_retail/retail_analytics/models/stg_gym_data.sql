/*
    crear view de los datos crudos de gym_data.
    datos con columnas estandarizadas para su posterior uso en modelos.
    crear columna fecha procesoamiento con la fecha actual.
*/
{{
    config(
        materialized='view',
        tags=['staging', 'limpieza']
    )
}}

SELECT
    -- 1. Identificadores (Renombrar a algo más descriptivo si es necesario)
    id as registro_id,

    -- 2. Métricas Físicas (Standard: snake_case)
    COALESCE("Weight_kg", 0) as peso_kg,
    "Height_m" as altura_m,
    "BMI" as indice_masa_corporal,
    "Fat_Percentage" as porcentaje_grasa,

    -- 3. Métricas Cardíacas
    "Max_BPM" as bpm_maximo,
    "Avg_BPM" as bpm_promedio,
    "Resting_BPM" as bpm_reposo,

    -- 4. Datos del Entrenamiento
    "Session_Duration_hours" as duracion_sesion_horas,
    "Calories_Burned" as calorias_quemadas,
    "Water_Intake_liters" as consumo_agua_litros,
    "Workout_Frequency_days_week" as frecuencia_entrenamiento_semanal,

    -- 5. Auditoría (Tu columna solicitada)
    CURRENT_DATE as fecha_proceso

FROM {{ ref('gym_data') }}
/*
    Configuracion: en dbt debe ser una tabla fisica, no una view
*/
{{ config(materialized='table') }}

SELECT
    1 as id_cliente,
    'Juan Perez' as nombre_cliente,
    'VIP' as segmento_cliente,
    CURRENT_DATE as fecha_registro,
    CURRENT_DATE + INTERVAL '60 days' as fecha_vencimiento
UNION ALL
SELECT
    2 as id_cliente,
    'Maria Gomez' as nombre_cliente,
    'Regular' as segmento_cliente,
    CURRENT_DATE - INTERVAL '30 days' as fecha_registro,
    CURRENT_DATE + INTERVAL '55 days' as fecha_vencimiento
UNION ALL
SELECT
    3 as id_cliente,
    'Carlos Sanchez' as nombre_cliente,
    'Nuevo' as segmento_cliente,
    CURRENT_DATE - INTERVAL '10 days' as fecha_registro,
    CURRENT_DATE + INTERVAL '25 days' as fecha_vencimiento
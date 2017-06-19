select 
    SUM(CASE
        WHEN SpentTime < 863 THEN 1
        ELSE 0
    END) AS haha,
    SUM(CASE
        WHEN SpentTime > 863 THEN 1
        ELSE 0
    END) AS hehe
from
    (SELECT 
        *
    FROM
        ldavlab_ruiming.etesttries_view
    where
        etestnr = '2' and Status = 'Beendet'
    group by Nachname) as t
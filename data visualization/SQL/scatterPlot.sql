SELECT 
    Bewertung, 
    IF(VerbrauchteZeit = 0, SpentTime, VerbrauchteZeit) as amount
FROM
    ldavlab_ruiming.etesttries_view
where
     etestnr = '2' and Status = 'Beendet' and SpentTime < 36000
group by Nachname
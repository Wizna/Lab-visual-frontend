SELECT distinct
    left(clientip,8), right(left(uri, 52), 10)
FROM
    ldavlab.TMG_Jan2017
where
    (left(uri, 52) regexp 's-[0-9]{5}$') limit 3000 offset 1000
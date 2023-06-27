SELECT
  customers.customerId AS customerid,
  customers.name AS name,
  GROUP_CONCAT(subjects.subjectName, ', ') AS subjects
FROM
  customers
  JOIN subjectstudentmapping ON customers.customerId = subjectstudentmapping.customerId
  JOIN subjects ON subjectstudentmapping.subjectId = subjects.subjectId
GROUP BY
  customers.customerId, customers.name
ORDER BY
  subjects ASC;

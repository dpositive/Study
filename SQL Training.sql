CREATE TABLE Product (productId INTEGER, Name nvarchar(40), ProductNumber nvarchar(16), Cost money, Count INTEGER, SellStartDate SmallDateTime); // Создайте БД с именем HomeWork, в которой создайте таблицу Product с колонками: ProductId, Name, ProductNumber, Cost, Count, SellStartDate. 
INSERT INTO Product (productId, Name, ProductNumber, Cost, Count,SellStartDate) // В таблицу Product запишите 10 записей о товарах: Name ProductNum Cost Count SellStartDate 
VALUES (1, 'Корона', 'AK-53818', '5', 50, '20110815') // Корона AK-53818 5$ 50 08/15/2011 
, (2, 'Милка', 'AM-51122', 6.1, 50, '20110715') // Милка AM-51122 6.1$ 50 07/15/2011 
, (3, 'Аленка', 'AA-52211', 2.5, 20, '20110615') // Аленка AA-52211 2.5$ 20 06/15/2011 
, (4, 'Snickers', 'BS-32118', 2.8, 50, '20110815') // Snickers BS-32118 2.8$ 50 08/15/2011 
, (5, 'Snickers', 'BSL-3818', 5, 100, '20110815') // Snickers BSL-3818 5$ 100 08/20/2011 
, (6, 'Bounty', 'BB-38218', 3, 100, '20110801') // Bounty BB-38218 3$ 100 08/01/2011 
, (7, 'Nuts', 'BN-37818', 3, 100, '20110821') // Nuts BN-37818 3$ 100 08/21/2011 
, (8, 'Mars', 'BM-3618', 2.5, 50, '20110824') // Mars BM-3618 2.5$ 50 08/24/2011 
, (9, 'Свиточ', 'AS-54181', 5, 100, '20110812') // Свиточ AS-54181 5$ 100 08/12/2011 
, (10, 'Свиточ', 'AS-54182', 5, 100, '20110812'); // Свиточ AS-54182 5$ 100 08/12/2011 

SELECT Name, Cost, SellStartDate
FROM Product
WHERE Count > 59; //Cделайте выборку для продукции количество которой больше 59 шт. 

SELECT Name, Cost, SellStartDate
FROM Product
WHERE Cost > 3
AND SellStartDate >= '20110812'; // Сделайте выборку для продукции цена которой больше 3$ и поступили на продажу c 12/08/2011. 

UPDATE Product
SET cost = cost +0.25
WHERE Name = 'Свиточ'; // Шоколад Свиточ подорожал на 25 центов, измените запись.

SELECT * FROM Product
SQL
*Operators:**
= equals
!= not equals
> greater than
< less than
>= greater than or equal to
<= less than or equal to
LIKE // используется с WHERE и знаками подстановки (wildcard character) '_' на это место можно вставить любой символ в слове  'H_llo' ,'%' обозначает 0 или больше пропущеных символов в в слове '%llo' или 'Hel%' или '%el%'
BETWEEN // используется с WHERE чтобы показать промежуточное значение между А и В для цифер, дат и текста
AND // используется с WHERE чтобы скомбинировать два параметра (SELECT * FROM movies WHERE year BETWEEN 1990 and 2000 AND genre = 'comedy';)
OR // так же используется с WHERE чтобы скомбинировать несколько параметров, но оценивает каждое условие отдельно, и если какое-либо из условий истинно, строка добавляется в результирующий набор. (SELECT column_name FROM table_name WHERE column_name = value_1 OR column_name = value_2;)

***Functions*
SELECT COUNT(column_name) FROM table_name; // COUNT() позволяет посчитать количество строчек которые имеют значение в указанном в столбце
SELECT SUM(column_name) FROM table_name; // функция которая использует имя колонки в качестве аргумента и сумирует все значения в этой колонке (SELECT category, SUM(downloads) FROM fake_apps GROUP BY category;)
SELECT MAX(column_name) FROM table_name; // функция которая использует имя колонки в качестве аргумента и возвращает максимальное значение из этой колонки
SELECT MIN(column_name) FROM table_name; // функция которая использует имя колонки в качестве аргумента и возвращает минимальное значение из этой колонки
SELECT AVG(column_name) FROM table_name; // функция которая использует имя колонки в качестве аргумента и возвращает общее значение значений из этой колонки
SELECT ROUND(column_name, integer)FROM table_name; // функция которая использует имя колонки и целое число в качестве аргументов и возвращает округленное значение после запятой до указаного в условии кол-ва знаков из этой колонки


**Commands:**

CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_3 datatype); // создание таблицы
INSERT INTO table_name (column_1, column_2, column_3) VALUES (value_1, 'value_2', value_3); // редактирование данных табл. TEXT берется в лапки: 'Hello'
ALTER TABLE table_name ADD column column_4  datatype; // добавить колонку в таблицу
UPDATE table_name
SET some_column = some_value
WHERE some_column = some_value; // редактировать данные в колонке
SELECT * FROM test; // показать всё с таблицы
SELECT column_name FROM table_name; // показать всё содержимое столбца
SELECT DISTINCT column_name FROM table_name; // показать содержимое столбца чтобы значения не повторялись (напр. жанры фильмов)
SELECT column_name(s)
FROM table_name
WHERE column_name = some_value; // показать только то содержимое столбца где присутствуют значения какие-то значения (SELECT name FROM movies WHERE genre = 'drama';)
DELETE FROM table_name WHERE some_column = some_value;  //  удалить данные
SELECT column_name FROM table_name ORDER BY column_name ASC|DESC; // используется для сортировки результата по алфавиту или номеру
SELECT column_name(s) FROM table_name LIMIT number; // указывает на максимальное кол-во рядков для отображения
SELECT COUNT(*) FROM table_name GROUP BY column_name; // 
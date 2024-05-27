--Crear una base de datos llamada banco.
CREATE DATABASE Banco;

--Crear una tabla transferencias.
CREATE TABLE transferencias
(descripcion varchar(50), fecha varchar(10), monto DECIMAL,
cuenta_origen INT, cuenta_destino INT);

--Crear una tabla cuentas.
CREATE TABLE cuentas (id INT, saldo DECIMAL CHECK (saldo >= 0) );

--Registrar por lo menos 2 cuentas en la tabla cuentas con un saldo inicial.
INSERT INTO cuentas values (1, 20000);
INSERT INTO cuentas values (2, 10000);
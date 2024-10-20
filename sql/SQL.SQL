-- Criação de um banco de dados
CREATE DATABASE ExampleDB;

-- Selecionar o banco de dados
USE ExampleDB; -- Para Azure SQL Database

-- Criar uma tabela de usuários
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1), -- Azure
    UserName NVARCHAR(50) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    CreatedAt DATETIME DEFAULT GETDATE() -- Azure
    -- Para PostgreSQL, você usaria: CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir dados na tabela de usuários
INSERT INTO Users (UserName, Email)
VALUES 
    ('Lucas', 'lucas@example.com'),
    ('Ana', 'ana@example.com'),
    ('João', 'joao@example.com');

-- Consultar os dados da tabela
SELECT * FROM Users;

-- Para Azure SQL Database, você pode usar:
-- EXEC sp_spaceused; -- Para verificar o espaço utilizado

-- Para Amazon RDS, você pode usar:
-- SELECT pg_size_pretty(pg_database_size('ExampleDB')); -- Para verificar o tamanho do banco de dados

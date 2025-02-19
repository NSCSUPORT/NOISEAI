const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// Abrir ou criar o banco de dados
let db = new sqlite3.Database('./drake_unix_holofi.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Banco de dados aberto com sucesso.');
        createTables();
    }
});

// Função para criar as tabelas
function createTables() {
    const createUsersTable = `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        token TEXT
    );`;

    const createServerDataTable = `CREATE TABLE IF NOT EXISTS ServerData (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        server_name TEXT,
        status TEXT,
        last_checked TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES Users(id)
    );`;

    const createLogDataTable = `CREATE TABLE IF NOT EXISTS LogData (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        server_id INTEGER,
        log_message TEXT,
        log_time TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(server_id) REFERENCES ServerData(id)
    );`;

    db.run(createUsersTable, function (err) {
        if (err) {
            console.error("Erro ao criar tabela 'Users':", err.message);
        } else {
            console.log("Tabela 'Users' criada com sucesso.");
        }
    });

    db.run(createServerDataTable, function (err) {
        if (err) {
            console.error("Erro ao criar tabela 'ServerData':", err.message);
        } else {
            console.log("Tabela 'ServerData' criada com sucesso.");
        }
    });

    db.run(createLogDataTable, function (err) {
        if (err) {
            console.error("Erro ao criar tabela 'LogData':", err.message);
        } else {
            console.log("Tabela 'LogData' criada com sucesso.");
        }
    });
}

// Função para obter e processar os dados unificados
function unifiedKernelOutput() {
    const query = `
        SELECT ServerData.server_name, ServerData.status, LogData.log_message, LogData.log_time
        FROM ServerData
        JOIN LogData ON ServerData.id = LogData.server_id;
    `;
    
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error("Erro ao realizar a consulta:", err.message);
            return;
        }

        let output = '';
        rows.forEach((row) => {
            output += `Server: ${row.server_name}, Status: ${row.status}, Log: ${row.log_message}, Time: ${row.log_time}\n`;
        });

        console.log("Unified Output for SSPP MT2: \n" + output);

        // Salvar o output em um arquivo
        fs.writeFileSync('/tmp/drake_unix_sspp_output.txt', output);
        console.log("Unified output written to SSPP MT2 file at /tmp/drake_unix_sspp_output.txt");
    });
}

// Função principal
function main() {
    unifiedKernelOutput();
}

// Chamada da função principal
main();

// Fechar o banco de dados quando terminar
db.close((err) => {
    if (err) {
        console.error("Erro ao fechar o banco de dados:", err.message);
    } else {
        console.log("Banco de dados fechado com sucesso.");
    }
});

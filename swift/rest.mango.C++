#include <iostream>
#include <sqlite3.h>
#include <vector>
#include <ctime>
#include <fstream>

// Structs for table representation
struct User {
    int64_t id;
    std::string name;
    std::string email;
    std::string token;
};

struct ServerData {
    int64_t id;
    int64_t user_id;
    std::string server_name;
    std::string status;
    std::string last_checked;
};

struct LogData {
    int64_t id;
    int64_t server_id;
    std::string log_message;
    std::string log_time;
};

// Database connection
sqlite3* db;
char* errMsg = 0;

// Function to execute SQL queries
int executeQuery(const std::string& query) {
    return sqlite3_exec(db, query.c_str(), 0, 0, &errMsg);
}

// Function to create tables
void createTables() {
    const std::string createUsersTable = R"(
        CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            token TEXT
        );
    )";
    const std::string createServerDataTable = R"(
        CREATE TABLE IF NOT EXISTS ServerData (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            server_name TEXT,
            status TEXT,
            last_checked TEXT DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES Users(id)
        );
    )";
    const std::string createLogDataTable = R"(
        CREATE TABLE IF NOT EXISTS LogData (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            server_id INTEGER,
            log_message TEXT,
            log_time TEXT DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(server_id) REFERENCES ServerData(id)
        );
    )";

    if (executeQuery(createUsersTable) != SQLITE_OK || 
        executeQuery(createServerDataTable) != SQLITE_OK || 
        executeQuery(createLogDataTable) != SQLITE_OK) {
        std::cerr << "Error creating tables: " << errMsg << std::endl;
        sqlite3_free(errMsg);
    } else {
        std::cout << "Tables created successfully" << std::endl;
    }
}

// Function to retrieve and output unified data from ServerData and LogData
void unifiedKernelOutput() {
    const std::string query = R"(
        SELECT ServerData.server_name, ServerData.status, LogData.log_message, LogData.log_time
        FROM ServerData
        JOIN LogData ON ServerData.id = LogData.server_id;
    )";

    sqlite3_stmt* stmt;
    if (sqlite3_prepare_v2(db, query.c_str(), -1, &stmt, 0) != SQLITE_OK) {
        std::cerr << "Error preparing query: " << sqlite3_errmsg(db) << std::endl;
        return;
    }

    std::string output;
    while (sqlite3_step(stmt) == SQLITE_ROW) {
        std::string serverName = reinterpret_cast<const char*>(sqlite3_column_text(stmt, 0));
        std::string status = reinterpret_cast<const char*>(sqlite3_column_text(stmt, 1));
        std::string logMessage = reinterpret_cast<const char*>(sqlite3_column_text(stmt, 2));
        std::string logTime = reinterpret_cast<const char*>(sqlite3_column_text(stmt, 3));

        output += "Server: " + serverName + ", Status: " + status + ", Log: " + logMessage + ", Time: " + logTime + "\n";
    }

    sqlite3_finalize(stmt);

    std::cout << "Unified Output for SSPP MT2: \n" << output << std::endl;

    // Write the output to a file
    std::ofstream outFile("/tmp/drake_unix_sspp_output.txt");
    outFile << output;
    outFile.close();
    std::cout << "Unified output written to SSPP MT2 file at /tmp/drake_unix_sspp_output.txt" << std::endl;
}

// Main function
int main() {
    const std::string dbPath = "drake_unix_holofi.db";
    if (sqlite3_open(dbPath.c_str(), &db)) {
        std::cerr << "Can't open database: " << sqlite3_errmsg(db) << std::endl;
        return 1;
    }
    std::cout << "Opened database successfully" << std::endl;

    createTables();
    unifiedKernelOutput();

    sqlite3_close(db);
    return 0;
}

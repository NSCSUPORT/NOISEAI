#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_USERS 10
#define KEY_LENGTH 16

// Estrutura para armazenar dados do usuário
typedef struct {
    char username[50];
    char password[50];
    char pixKey[KEY_LENGTH + 1]; // Chave Pix (ex: 16 caracteres)
} User;

// Estrutura para armazenar a lista de usuários
typedef struct {
    User users[MAX_USERS];
    int userCount;
} UserManager;

// Funções
void initializeUserManager(UserManager *manager);
int addUser(UserManager *manager, const char *username, const char *password, const char *pixKey);
int authenticateUser(UserManager *manager, const char *username, const char *password, const char *pixKey);
void printUsers(UserManager *manager);

// Função principal
int main() {
    UserManager manager;
    initializeUserManager(&manager);

    // Adiciona alguns usuários de exemplo
    addUser(&manager, "user1", "password1", "key1234567890123");
    addUser(&manager, "user2", "password2", "key9876543210123");

    // Testa autenticação
    if (authenticateUser(&manager, "user1", "password1", "key1234567890123")) {
        printf("Autenticação bem-sucedida para user1!\n");
    } else {
        printf("Falha na autenticação para user1.\n");
    }

    // Lista todos os usuários
    printUsers(&manager);

    return 0;
}

// Função para inicializar o gerenciador de usuários
void initializeUserManager(UserManager *manager) {
    manager->userCount = 0;
}

// Função para adicionar um usuário
int addUser(UserManager *manager, const char *username, const char *password, const char *pixKey) {
    if (manager->userCount >= MAX_USERS) {
        printf("Limite de usuários atingido!\n");
        return 0; // Falha
    }
    strcpy(manager->users[manager->userCount].username, username);
    strcpy(manager->users[manager->userCount].password, password);
    strcpy(manager->users[manager->userCount].pixKey, pixKey);
    manager->userCount++;
    return 1; // Sucesso
}

// Função para autenticar um usuário
int authenticateUser(UserManager *manager, const char *username, const char *password, const char *pixKey) {
    for (int i = 0; i < manager->userCount; i++) {
        if (strcmp(manager->users[i].username, username) == 0 &&
            strcmp(manager->users[i].password, password) == 0 &&
            strcmp(manager->users[i].pixKey, pixKey) == 0) {
            return 1; // Sucesso
        }
    }
    return 0; // Falha
}

// Função para imprimir a lista de usuários
void printUsers(UserManager *manager) {
    printf("Usuários cadastrados:\n");
    for (int i = 0; i < manager->userCount; i++) {
        printf("Username: %s, Pix Key: %s\n", manager->users[i].username, manager->users[i].pixKey);
    }
}

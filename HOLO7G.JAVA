// Copyright (c) NSC and affiliates.
// Este software pode ser usado e distribuído de acordo com os termos da Licença da Comunidade NSC.

import java.util.Scanner;

// Classe para armazenar dados do usuário
class User {
    String username;
    String password;
    String pixKey; // Chave Pix (ex: 16 caracteres)

    User(String username, String password, String pixKey) {
        this.username = username;
        this.password = password;
        this.pixKey = pixKey;
    }
}

// Classe para armazenar a lista de usuários
class UserManager {
    private static final int MAX_USERS = 10;
    private User[] users = new User[MAX_USERS];
    private int userCount = 0;

    // Método para adicionar um usuário
    public boolean addUser(String username, String password, String pixKey) {
        if (userCount >= MAX_USERS) {
            System.out.println("Limite de usuários atingido!");
            return false; // Falha
        }
        users[userCount++] = new User(username, password, pixKey);
        return true; // Sucesso
    }

    // Método para autenticar um usuário
    public boolean authenticateUser(String username, String password, String pixKey) {
        for (int i = 0; i < userCount; i++) {
            if (users[i].username.equals(username) &&
                users[i].password.equals(password) &&
                users[i].pixKey.equals(pixKey)) {
                return true; // Sucesso
            }
        }
        return false; // Falha
    }

    // Método para imprimir a lista de usuários
    public void printUsers() {
        System.out.println("Usuários cadastrados:");
        for (int i = 0; i < userCount; i++) {
            System.out.printf("Username: %s, Pix Key: %s%n", users[i].username, users[i].pixKey);
        }
    }
}

// Classe principal
public class Main {
    public static void main(String[] args) {
        UserManager manager = new UserManager();

        // Adiciona alguns usuários de exemplo
        manager.addUser("user1", "password1", "key1234567890123");
        manager.addUser("user2", "password2", "key9876543210123");

        // Testa autenticação
        if (manager.authenticateUser("user1", "password1", "key1234567890123")) {
            System.out.println("Autenticação bem-sucedida para user1!");
        } else {
            System.out.println("Falha na autenticação para user1.");
        }

        // Lista todos os usuários
        manager.printUsers();
    }
}

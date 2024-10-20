#include <stdio.h>
#include <string.h>

// Função para autenticar o usuário
int authenticateUser(const char* username, const char* password) {
    // Simulação de autenticação: aqui você pode adicionar verificação real
    const char* validUser = "admin";
    const char* validPassword = "password123";

    if (strcmp(username, validUser) == 0 && strcmp(password, validPassword) == 0) {
        return 1; // Autenticação bem-sucedida
    }
    return 0; // Autenticação falhou
}

// Função para inicializar a transmissão WPS-B
void initializeWPSB() {
    printf("Transmissão WPS-B inicializada.\n");
}

// Função para transmitir dados via WPS-B
void transmitData(const char* data) {
    printf("Transmitindo dados via WPS-B: %s\n", data);
}

// Função para transmitir dados utilizando Two-PiX Key
void transmitDataWithTwoPix(const char* data) {
    printf("Transmitindo com Two-PiX Key: %s\n", data);
}

// Função principal
int main() {
    // Inicialização do sistema
    initializeWPSB();

    // Dados do usuário para autenticação
    char username[50];
    char password[50];

    printf("Digite o nome de usuário: ");
    scanf("%s", username);
    printf("Digite a senha: ");
    scanf("%s", password);

    // Autenticar o usuário
    if (authenticateUser(username, password)) {
        printf("Autenticação bem-sucedida!\n");

        // Dados a serem transmitidos
        const char* dataToTransmit = "Hello, HoloNet 7G!";
        
        // Transmitir dados usando WPS-B
        transmitData(dataToTransmit);
        
        // Transmitir dados usando Two-PiX Key
        transmitDataWithTwoPix(dataToTransmit);
    } else {
        printf("Falha na autenticação. Verifique seu nome de usuário e senha.\n");
    }

    return 0;
}

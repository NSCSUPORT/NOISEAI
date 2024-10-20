#include <stdio.h>

// Função para rastrear dados
void track_data(const char *data) {
    printf("Rastreamento de dados: %s\n", data);
}

// Função para iniciar o motor de íons
void start_engine() {
    printf("Motor de íons iniciado.\n");
}

// Função para definir o empuxo
void set_thrust(int value) {
    printf("Empuxo definido para: %dN\n", value);
}

// Função principal
int main() {
    // Rastreamento de dados
    track_data("Iniciando transmissão HoloFi.");

    // Controle do motor de íons
    start_engine();
    set_thrust(10); // exemplo de empuxo

    return 0;
}

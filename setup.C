#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Estrutura de dados para armazenar informações
typedef struct {
    int id;
    char name[50];
    float value;
} DataEntry;

// Função para inicializar uma nova entrada de dados
DataEntry createDataEntry(int id, const char* name, float value) {
    DataEntry entry;
    entry.id = id;
    strncpy(entry.name, name, sizeof(entry.name) - 1);
    entry.name[sizeof(entry.name) - 1] = '\0'; // Garantir que a string está terminada
    entry.value = value;
    return entry;
}

// Função para exibir uma entrada de dados
void displayDataEntry(const DataEntry* entry) {
    printf("ID: %d\n", entry->id);
    printf("Name: %s\n", entry->name);
    printf("Value: %.2f\n", entry->value);
}

int main() {
    // Inicializa algumas entradas de dados
    DataEntry entry1 = createDataEntry(1, "Sample Data 1", 123.45);
    DataEntry entry2 = createDataEntry(2, "Sample Data 2", 678.90);

    // Exibe as entradas de dados
    printf("Data Entry 1:\n");
    displayDataEntry(&entry1);
    printf("\nData Entry 2:\n");
    displayDataEntry(&entry2);

    return 0;
}

#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>

// Função de tracing com ajuste de ruído
std::vector<double> tracing_algorithm(const std::vector<int>& data, double noise_factor) {
    std::vector<double> result;

    // Geração do ruído aleatório para cada valor
    for (size_t i = 0; i < data.size(); ++i) {
        // Gera um ruído aleatório baseado no fator de ruído
        double noise = (rand() % 1000) / 1000.0 * noise_factor;  // Ruído aleatório entre 0 e noise_factor
        double adjusted_value = data[i] + noise;
        result.push_back(adjusted_value);
    }

    return result;
}

int main() {
    // Inicializa o gerador de números aleatórios
    srand(static_cast<unsigned int>(time(0)));

    // Dados de entrada
    std::vector<int> input_data = {10, 20, 30};

    // Fator de ruído
    double noise_factor = 5.0;

    // Chama a função de tracing
    std::vector<double> traced_data = tracing_algorithm(input_data, noise_factor);

    // Exibe os valores tracejados com ruído ajustado
    for (size_t i = 0; i < traced_data.size(); ++i) {
        std::cout << "Traced Value: " << traced_data[i] << std::endl;
    }

    return 0;
}

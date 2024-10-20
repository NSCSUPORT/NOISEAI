import Foundation

let numInput = 10
let numHidden = 20
let numOutput = 3
let maxEpochs = 1000
let learningRate = 0.01

// Função Sigmoid
func sigmoid(_ x: Double) -> Double {
    return 1.0 / (1.0 + exp(-x))
}

// Derivada da função Sigmoid
func sigmoidDerivative(_ x: Double) -> Double {
    return x * (1.0 - x)
}

// Inicializa pesos aleatórios
func initializeWeights() -> (weightsInputHidden: [[Double]], weightsHiddenOutput: [[Double]]) {
    var weightsInputHidden = Array(repeating: Array(repeating: 0.0, count: numHidden), count: numInput)
    var weightsHiddenOutput = Array(repeating: Array(repeating: 0.0, count: numOutput), count: numHidden)
    
    for i in 0..<numInput {
        for j in 0..<numHidden {
            weightsInputHidden[i][j] = Double.random(in: -1.0...1.0)
        }
    }
    
    for i in 0..<numHidden {
        for j in 0..<numOutput {
            weightsHiddenOutput[i][j] = Double.random(in: -1.0...1.0)
        }
    }
    
    return (weightsInputHidden, weightsHiddenOutput)
}

// Feedforward
func feedforward(input: [Double], hidden: inout [Double], output: inout [Double], weightsInputHidden: [[Double]], weightsHiddenOutput: [[Double]]) {
    for i in 0..<numHidden {
        hidden[i] = 0.0
        for j in 0..<numInput {
            hidden[i] += input[j] * weightsInputHidden[j][i]
        }
        hidden[i] = sigmoid(hidden[i])
    }

    for i in 0..<numOutput {
        output[i] = 0.0
        for j in 0..<numHidden {
            output[i] += hidden[j] * weightsHiddenOutput[j][i]
        }
        output[i] = sigmoid(output[i])
    }
}

// Função de treinamento
func train(inputData: [[Double]], outputData: [[Double]]) {
    var (weightsInputHidden, weightsHiddenOutput) = initializeWeights()
    var hidden = Array(repeating: 0.0, count: numHidden)
    var output = Array(repeating: 0.0, count: numOutput)

    for _ in 0..<maxEpochs {
        for i in 0..<inputData.count {
            feedforward(input: inputData[i], hidden: &hidden, output: &output, weightsInputHidden: weightsInputHidden, weightsHiddenOutput: weightsHiddenOutput)

            // Backpropagation
            var error = Array(repeating: 0.0, count: numOutput)
            var outputDelta = Array(repeating: 0.0, count: numOutput)

            for j in 0..<numOutput {
                error[j] = outputData[i][j] - output[j]
                outputDelta[j] = error[j] * sigmoidDerivative(output[j])
            }

            // Atualização de pesos hidden-output
            for j in 0..<numHidden {
                for k in 0..<numOutput {
                    weightsHiddenOutput[j][k] += learningRate * hidden[j] * outputDelta[k]
                }
            }

            // Atualização de pesos input-hidden
            var hiddenDelta = Array(repeating: 0.0, count: numHidden)
            for j in 0..<numHidden {
                hiddenDelta[j] = 0.0
                for k in 0..<numOutput {
                    hiddenDelta[j] += outputDelta[k] * weightsHiddenOutput[j][k]
                }
                hiddenDelta[j] *= sigmoidDerivative(hidden[j])
            }

            for j in 0..<numInput {
                for k in 0..<numHidden {
                    weightsInputHidden[j][k] += learningRate * inputData[i][j] * hiddenDelta[k]
                }
            }
        }
    }
}

// Simulação de execução
func main() {
    let inputData: [[Double]] = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    
    let outputData: [[Double]] = [
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0]
    ]

    train(inputData: inputData, outputData: outputData)
}

// Chamada da função principal
main()

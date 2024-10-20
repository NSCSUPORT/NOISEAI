import TensorFlow

// Definindo parâmetros do modelo para SEA HIC CLEAR
struct ModelArgs {
    var dim: Int = 4096
    var nLayers: Int = 32
    var nHeads: Int = 32
    var vocabSize: Int = -1
    var multipleOf: Int = 256
    var normEps: Float = 1e-5
    var ropeTheta: Float = 500000
}

// Classe para normalização
struct RMSNorm: Layer {
    var weight: Tensor<Float>

    init(dim: Int, eps: Float = 1e-6) {
        self.weight = Tensor<Float>(ones: [dim]) * (1.0 / sqrt(Float(dim)))
    }

    @differentiable
    func callAsFunction(_ x: Tensor<Float>) -> Tensor<Float> {
        let normed = x * rsqrt(pow(x, 2).mean(alongAxes: -1, keepdims: true) + eps)
        return normed * weight
    }
}

// Função para calcular as frequências
func precomputeFreqsCis(dim: Int, end: Int, theta: Float = 10000.0) -> Tensor<Complex<Float>> {
    let freqs = 1.0 / pow(theta, Tensor<Float>(0..<dim, dtype: Float()) / Float(dim))
    let t = Tensor<Float>(0..<end)
    let freqsCis = t.expandDims(1) * freqs
    return complex(real: Tensor<Float>(ones: [end, dim / 2]), imag: freqsCis)
}

// Camada de Atenção
struct Attention: Layer {
    var wq: Dense<Float>
    var wk: Dense<Float>
    var wo: Dense<Float>
    var norm: RMSNorm

    init(args: ModelArgs) {
        wq = Dense<Float>(inputSize: args.dim, outputSize: args.nHeads * (args.dim / args.nHeads), activation: identity)
        wk = Dense<Float>(inputSize: args.dim, outputSize: args.nHeads * (args.dim / args.nHeads), activation: identity)
        wo = Dense<Float>(inputSize: args.nHeads * (args.dim / args.nHeads), outputSize: args.dim, activation: identity)
        norm = RMSNorm(dim: args.dim)
    }

    @differentiable
    func callAsFunction(_ x: Tensor<Float>) -> Tensor<Float> {
        let xq = wq(x)
        let xk = wk(x)

        let scores = matmul(xq, transposed: xk) / sqrt(Float(args.dim) / Float(args.nHeads))
        let attentionWeights = softmax(scores)
        let output = matmul(attentionWeights, xk)

        return wo(output)
    }
}

// Classe principal do Transformer para SEA HIC CLEAR
struct Transformer: Layer {
    var layers: [Attention]
    var norm: RMSNorm

    init(args: ModelArgs) {
        layers = (0..<args.nLayers).map { _ in Attention(args: args) }
        norm = RMSNorm(dim: args.dim)
    }

    @differentiable
    func callAsFunction(_ tokens: Tensor<Float>) -> Tensor<Float> {
        var h = tokens

        for layer in layers {
            h = layer(h)
        }
        return norm(h)
    }
}

// Exemplo de uso
let modelArgs = ModelArgs()
let model = Transformer(args: modelArgs)

// Simulando dados de entrada
let inputTokens = Tensor<Float>(randomNormal: [1, 2048, modelArgs.dim])
let output = model(inputTokens)

print(output)

import Foundation

// Define o tipo de função da biblioteca
typealias AssemblyFunc = @convention(c) (Int32) -> Int32

// Função para carregar a biblioteca e chamar a função Assembly
func callAssemblyFunction(input: Int32) -> Int32 {
    // Determine o caminho da biblioteca dinâmica
    let libraryPath: String
    #if os(Windows)
    libraryPath = "libassembly.dll"
    #else
    libraryPath = "libassembly.so"
    #endif

    // Carregar a biblioteca
    guard let dylib = dlopen(libraryPath, RTLD_LAZY) else {
        print("Erro ao carregar a biblioteca: \(String(cString: dlerror()))")
        return -1
    }

    // Procura a função na biblioteca
    guard let assemblyFunction = dlsym(dylib, "assembly_function") else {
        print("Erro ao encontrar a função: \(String(cString: dlerror()))")
        dlclose(dylib)
        return -1
    }

    // Converte o ponteiro da função para o tipo apropriado
    let functionPointer = unsafeBitCast(assemblyFunction, to: AssemblyFunc.self)

    // Chama a função Assembly com o valor desejado
    let result = functionPointer(input)

    // Fecha a biblioteca
    dlclose(dylib)

    return result
}

// Chamar a função com um valor de entrada
let input: Int32 = 10
let result = callAssemblyFunction(input: input)
print("Resultado da função Assembly: \(result)")

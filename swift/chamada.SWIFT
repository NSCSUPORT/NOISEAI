import Foundation

typealias AssemblyFunc = @convention(c) (Int32) -> Int32

func callAssemblyFunction(input: Int32) -> Int32 {
    let libraryPath: String
    #if os(Windows)
    libraryPath = "libassembly.dll"
    #else
    libraryPath = "libassembly.so"
    #endif

    guard let dylib = dlopen(libraryPath, RTLD_LAZY) else {
        print("Erro ao carregar a biblioteca: \(String(cString: dlerror()))")
        return -1
    }

    guard let assemblyFunction = dlsym(dylib, "assembly_function") else {
        print("Erro ao encontrar a função: \(String(cString: dlerror()))")
        dlclose(dylib)
        return -1
    }

    let functionPointer = unsafeBitCast(assemblyFunction, to: AssemblyFunc.self)
    let result = functionPointer(input)

    dlclose(dylib)

    return result
}

// Chamar a função com um valor de entrada
let input: Int32 = 10
let result = callAssemblyFunction(input: input)
print("Resultado da função Assembly: \(result)")

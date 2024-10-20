import Foundation

let compileCommand = "gcc" // Comando de compilação
let outputName = "output_program" // Nome do programa final
let terminalCommand = "./" // Comando para executar o programa

// Função única para compilar e executar todos os arquivos .c
func lakeStation() {
    var compileCmd = "\(compileCommand) -o \(outputName) " // Buffer para o comando de compilação

    // Obtendo o diretório atual
    let fileManager = FileManager.default
    do {
        let currentPath = fileManager.currentDirectoryPath
        let items = try fileManager.contentsOfDirectory(atPath: currentPath)

        // Listar todos os arquivos no diretório atual
        for item in items {
            // Verificar arquivos .c
            if item.hasSuffix(".c") {
                compileCmd += "\(item) "
            }
        }

        // Verificar se há arquivos para compilar
        if compileCmd == "\(compileCommand) -o \(outputName) " {
            print("Nenhum arquivo .c encontrado para compilar.")
            return
        }

        // Executar o comando de compilação
        print("Compilando com o comando: \(compileCmd)")
        let compileResult = system(compileCmd)

        if compileResult != 0 {
            print("Falha na compilação.")
            return
        }

        print("Compilação bem-sucedida!")

        // Executar o programa compilado
        let runCmd = "\(terminalCommand)\(outputName)"
        print("Executando o programa: \(runCmd)")
        let runResult = system(runCmd)

        if runResult != 0 {
            print("Falha na execução.")
        } else {
            print("Programa executado com sucesso.")
        }

    } catch {
        print("Erro ao acessar o diretório: \(error)")
    }
}

// Chamar a função lakeStation
lakeStation()

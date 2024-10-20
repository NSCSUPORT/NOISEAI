import Foundation

func createSeaholoAwsConfigFile() {
    let awsConfig = """
    # Configuração do SEAHOLO CLEAR CLOUD com chaves SSH da AWS

    # Host para a instância AWS 1
    Host seaholo-aws-instance-1
        HostName ec2-XX-XXX-XXX-XX.compute-1.amazonaws.com
        User ec2-user
        IdentityFile ~/.ssh/aws_key_1.pem
        ForwardAgent yes

    # Host para a instância AWS 2
    Host seaholo-aws-instance-2
        HostName ec2-YY-YYY-YYY-YY.compute-1.amazonaws.com
        User ec2-user
        IdentityFile ~/.ssh/aws_key_2.pem
        ForwardAgent yes
    """

    do {
        let fileURL = URL(fileURLWithPath: "~/seaholo/config_aws").expandingTildeInPath
        try awsConfig.write(to: fileURL, atomically: true, encoding: .utf8)
        print("Arquivo de configuração 'config_aws' criado com sucesso.")
    } catch {
        print("Erro ao criar o arquivo de configuração AWS: \(error)")
    }
}

func createSeaholoAzureConfigFile() {
    let azureConfig = """
    # Configuração do SEAHOLO CLEAR CLOUD com chaves SSH da Azure

    # Host para a instância Azure 1
    Host seaholo-azure-instance-1
        HostName azure-XX-XXX-XXX-XX.cloudapp.net
        User azureuser
        IdentityFile ~/.ssh/azure_key_1.pem
        ForwardAgent yes

    # Host para a instância Azure 2
    Host seaholo-azure-instance-2
        HostName azure-YY-YYY-YYY-YY.cloudapp.net
        User azureuser
        IdentityFile ~/.ssh/azure_key_2.pem
        ForwardAgent yes
    """

    do {
        let fileURL = URL(fileURLWithPath: "~/seaholo/config_azure").expandingTildeInPath
        try azureConfig.write(to: fileURL, atomically: true, encoding: .utf8)
        print("Arquivo de configuração 'config_azure' criado com sucesso.")
    } catch {
        print("Erro ao criar o arquivo de configuração Azure: \(error)")
    }
}

func createDirectoryIfNeeded() {
    let directoryURL = URL(fileURLWithPath: "~/seaholo").expandingTildeInPath
    do {
        try FileManager.default.createDirectory(at: directoryURL, withIntermediateDirectories: true, attributes: nil)
        print("Diretório 'seaholo' criado com sucesso.")
    } catch {
        print("Erro ao criar o diretório 'seaholo': \(error)")
    }
}

func main() {
    print("Criando os arquivos de configuração do SEAHOLO CLEAR CLOUD...")
    createDirectoryIfNeeded() // Cria o diretório SEAHOLO se não existir
    createSeaholoAwsConfigFile() // Cria o arquivo de configuração da AWS
    createSeaholoAzureConfigFile() // Cria o arquivo de configuração da Azure
}

// Executa a função principal
main()

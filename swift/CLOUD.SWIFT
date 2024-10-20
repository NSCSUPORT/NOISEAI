import Foundation

func createAwsConfigFile() {
    let awsConfig = """
    # Configuração do SEAS com chaves SSH da AWS

    # Host para a instância AWS 1
    Host aws-instance-1
        HostName ec2-XX-XXX-XXX-XX.compute-1.amazonaws.com
        User ec2-user
        IdentityFile ~/.ssh/aws_key_1.pem
        ForwardAgent yes

    # Host para a instância AWS 2
    Host aws-instance-2
        HostName ec2-YY-YYY-YYY-YY.compute-1.amazonaws.com
        User ec2-user
        IdentityFile ~/.ssh/aws_key_2.pem
        ForwardAgent yes
    """

    do {
        let fileURL = URL(fileURLWithPath: "config_aws")
        try awsConfig.write(to: fileURL, atomically: true, encoding: .utf8)
        print("Arquivo de configuração 'config_aws' criado com sucesso.")
    } catch {
        print("Erro ao criar o arquivo de configuração AWS: \(error)")
    }
}

func createAzureConfigFile() {
    let azureConfig = """
    # Configuração do SEAS com chaves SSH da Azure

    # Host para a instância Azure 1
    Host azure-instance-1
        HostName azure-XX-XXX-XXX-XX.cloudapp.net
        User azureuser
        IdentityFile ~/.ssh/azure_key_1.pem
        ForwardAgent yes

    # Host para a instância Azure 2
    Host azure-instance-2
        HostName azure-YY-YYY-YYY-YY.cloudapp.net
        User azureuser
        IdentityFile ~/.ssh/azure_key_2.pem
        ForwardAgent yes
    """

    do {
        let fileURL = URL(fileURLWithPath: "config_azure")
        try azureConfig.write(to: fileURL, atomically: true, encoding: .utf8)
        print("Arquivo de configuração 'config_azure' criado com sucesso.")
    } catch {
        print("Erro ao criar o arquivo de configuração Azure: \(error)")
    }
}

func main() {
    print("Criando os arquivos de configuração do SEAS...")
    createAwsConfigFile() // Cria o arquivo de configuração da AWS
    createAzureConfigFile() // Cria o arquivo de configuração da Azure
}

// Executa a função principal
main()

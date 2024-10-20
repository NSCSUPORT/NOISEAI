class Authenticator:
    def __init__(self):
        # Usuário e senha válidos
        self.valid_user = "admin"
        self.valid_password = "password123"
    
    def authenticate_user(self, username, password):
        """Verifica se o usuário e a senha estão corretos."""
        return username == self.valid_user and password == self.valid_password

    def initialize_wps_b(self):
        """Inicializa a transmissão WPS-B."""
        print("Transmissão WPS-B inicializada.")

    def transmit_data(self, data):
        """Transmite dados via WPS-B."""
        print(f"Transmitindo dados via WPS-B: {data}")

    def transmit_data_with_two_pix(self, data):
        """Transmite dados utilizando Two-PiX Key."""
        print(f"Transmitindo com Two-PiX Key: {data}")

def main():
    auth = Authenticator()
    auth.initialize_wps_b()

    # Solicita os dados do usuário
    username = input("Digite o nome de usuário: ")
    password = input("Digite a senha: ")

    # Autentica o usuário
    if auth.authenticate_user(username, password):
        print("Autenticação bem-sucedida!")
        
        # Dados a serem transmitidos
        data_to_transmit = "Hello, HoloNet 7G!"
        
        # Transmitir dados usando WPS-B
        auth.transmit_data(data_to_transmit)
        
        # Transmitir dados usando Two-PiX Key
        auth.transmit_data_with_two_pix(data_to_transmit)
    else:
        print("Falha na autenticação. Verifique seu nome de usuário e senha.")

if __name__ == "__main__":
    main()

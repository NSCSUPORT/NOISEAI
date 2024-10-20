# Pré-processamento de dados para o modelo
import pandas as pd

def preprocess_data(file_path):
    data = pd.read_csv(file_path)
    # Processamento de dados
    return data

data = preprocess_data("input_data.csv")

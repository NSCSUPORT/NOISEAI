# Script para treinamento do modelo
from ai_model import HoloseaModel
from data_preprocessing import preprocess_data

data = preprocess_data("input_data.csv")
model = HoloseaModel()
model.train(data)

-- Controle de propulsão de íons HIC
function start_engine()
    print("Motor de íons iniciado.")
end

function set_thrust(value)
    print("Empuxo definido para: " .. value .. "N")
end

start_engine()
set_thrust(10) -- exemplo de empuxo

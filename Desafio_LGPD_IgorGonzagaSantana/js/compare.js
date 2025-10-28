let carsToCompare = [];

class Car {
    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, imagem) {
        this.modelo = modelo;
        this.preco = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        this.alturaCacamba = alturaCacamba + " mm";
        this.alturaVeiculo = alturaVeiculo + " mm";
        this.alturaSolo = alturaSolo + " mm";
        this.capacidadeCarga = capacidadeCarga + " Kg";
        this.motor = motor;
        this.potencia = potencia + " cv";
        this.volumeCacamba = volumeCacamba + " L";
        this.roda = roda;
        this.imagem = `<img src="${imagem}" width="150">`;
    }
}

function GetCarArrPosition(car) {
    return carsToCompare.findIndex(item => item.modelo === car.modelo);
}

function SetCarToCompare(checkbox, car) {
    const isChecked = checkbox.checked;
    const carPosition = GetCarArrPosition(car);

    if (isChecked) {
        if (carsToCompare.length < 2 && carPosition === -1) {
            carsToCompare.push(car);
        } else if (carsToCompare.length >= 2) {
            checkbox.checked = false;
            alert('Você só pode selecionar dois veículos para comparação.');
        }
    } else {
        if (carPosition > -1) {
            carsToCompare.splice(carPosition, 1);
        }
    }
}

function UpdateCompareTable() {
    const [car1, car2] = carsToCompare;

    document.getElementById('compare_image_0').innerHTML = car1.imagem;
    document.getElementById('compare_modelo_0').innerText = car1.modelo;
    document.getElementById('compare_alturacacamba_0').innerText = car1.alturaCacamba;
    document.getElementById('compare_alturaveiculo_0').innerText = car1.alturaVeiculo;
    document.getElementById('compare_alturasolo_0').innerText = car1.alturaSolo;
    document.getElementById('compare_capacidadecarga_0').innerText = car1.capacidadeCarga;
    document.getElementById('compare_motor_0').innerText = car1.motor;
    document.getElementById('compare_potencia_0').innerText = car1.potencia;
    document.getElementById('compare_volumecacamba_0').innerText = car1.volumeCacamba;
    document.getElementById('compare_roda_0').innerText = car1.roda;
    document.getElementById('compare_preco_0').innerText = car1.preco;

    document.getElementById('compare_image_1').innerHTML = car2.imagem;
    document.getElementById('compare_modelo_1').innerText = car2.modelo;
    document.getElementById('compare_alturacacamba_1').innerText = car2.alturaCacamba;
    document.getElementById('compare_alturaveiculo_1').innerText = car2.alturaVeiculo;
    document.getElementById('compare_alturasolo_1').innerText = car2.alturaSolo;
    document.getElementById('compare_capacidadecarga_1').innerText = car2.capacidadeCarga;
    document.getElementById('compare_motor_1').innerText = car2.motor;
    document.getElementById('compare_potencia_1').innerText = car2.potencia;
    document.getElementById('compare_volumecacamba_1').innerText = car2.volumeCacamba;
    document.getElementById('compare_roda_1').innerText = car2.roda;
    document.getElementById('compare_preco_1').innerText = car2.preco;
}

function ShowCompare() {
    if (carsToCompare.length !== 2) {
        alert('É necessário escolher dois veículos para comparar.');
        return;
    }
    UpdateCompareTable();
    document.getElementById('compare').style.display = 'flex';
}

function HideCompare() {
    document.getElementById('compare').style.display = 'none';
}
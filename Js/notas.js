function agregarNotas(){

    let nom = document.getElementById('nombre').value;
    let not1 = document.getElementById('nota1').value;
    let not2 = document.getElementById('nota2').value;
    let not3 = document.getElementById('nota3').value;

    if(nom === ""){
        swal("Ingrese el nombre del estudiante");
        return;
    }

    if(not1 === "" || not2 === "" || not3 === ""){
        swal("Ingrese todas las notas");
        return;
    }

    if(not1 > 5 || not2 > 5 || not3 > 5){
        swal("Las notas deben ser máximo 5.0");
        return;
    }

    let prom = (parseFloat(not1) + parseFloat(not2) + parseFloat(not3)) / 3;

    let obs = (prom >= 3) ? "Aprobado ✔" : "Reprobado ❌";

    const fila = `
        <tr>
            <td>${nom}</td>
            <td>${not1}</td>
            <td>${not2}</td>
            <td>${not3}</td>
            <td>${prom.toFixed(1)}</td>
            <td>${obs}</td>
        </tr>
    `;

    document.getElementById("addtabla").innerHTML += fila;

    document.getElementById('nombre').value = "";
    document.getElementById('nota1').value = "";
    document.getElementById('nota2').value = "";
    document.getElementById('nota3').value = "";
}

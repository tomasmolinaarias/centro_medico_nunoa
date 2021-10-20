
const radiologia = [
    {
        HORA: '11:00 A.M',
        ESPECIALISTA: 'IGNACIO SCHULZ',
        PACIENTE: 'FRANCISCA ROJAS',
        RUT: '9878782-1',
        PREVISION:'FONASA',
    },
    {
        HORA: '11:30 A.M',
        ESPECIALISTA: 'FEDERICO SUBERCASEAUX',
        PACIENTE: 'PAMELA ESTRADA',
        RUT: '15345241-3',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '15:00 P.M',
        ESPECIALISTA: 'FERNANDO WURTHZ',
        PACIENTE: 'ARMANDO LUNA',
        RUT: '16445345-9',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '15:30 P.M',
        ESPECIALISTA: 'ANA MARIA GODOY',
        PACIENTE: 'MANUEL GODOY',
        RUT: '17666419-0',
        PREVISION:'FONASA',
    },
    {
        HORA: '16:00 P.M',
        ESPECIALISTA: 'PATRICIA SUAZO',
        PACIENTE: 'RAMON ULLOA',
        RUT: '14989389-K',
        PREVISION:'FONASA',
    },
    
    ];
    let texto = `
    
    <tr>
        <th>HORA</th>
        <th>ESPECIALISTA</th>
        <th>PACIENTE</th>
        <th>RUT</th>
        <th>PREVENSION</th>
    </tr>
    
    `
    for(i=0; i< radiologia.length ;i++){
        texto+= `
        
    <tr>
        <td>${radiologia[i].HORA}</td>
        <td>${radiologia[i].ESPECIALISTA}</td>
        <td>${radiologia[i].PACIENTE}</td>
        <td>${radiologia[i].RUT}</td>
        <td>${radiologia[i].PREVISION}</td>
    </tr>
        
        `

    };
document.getElementById("tabla_radiologia").innerHTML = texto;
document.getElementById("ultima").innerHTML = (`Primer Atención : ${radiologia[0].PACIENTE} - ${radiologia[0].PREVISION} 
| Ultima Atención : ${radiologia[4].PACIENTE} - ${radiologia[4].PREVISION}`);
document.getElementById("subtitulo").innerHTML = ("Estadísticas del centro médico ñuñoa");


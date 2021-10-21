
const dental = [
    {
        HORA: '8:30 A.M',
        ESPECIALISTA: 'ANDREA ZUÑIGA',
        PACIENTE: 'MARCELA RETAMAL',
        RUT: '11123425-6',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '11:00 A.M',
        ESPECIALISTA: 'MARIA PIA ZAÑARTU',
        PACIENTE: 'ANGEL MUÑOZ',
        RUT: '9878789-2',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '11:30 A.M',
        ESPECIALISTA: 'SCARLETT WITTING',
        PACIENTE: 'MARIO KAST',
        RUT: '7998789-5',
        PREVISION:'FONASA',
    },
    {
        HORA: '13:00 P.M',
        ESPECIALISTA: 'FRANCISCO VON TEUBER',
        PACIENTE: 'KARIN FERNANDEZ',
        RUT: '18887662-K',
        PREVISION:'FONASA',
    },
    {
        HORA: '13:30 P.M',
        ESPECIALISTA: 'EDUARDO VIÑUELA',
        PACIENTE: 'HUGO SANCHEZ',
        RUT: '17665461-4',
        PREVISION:'FONASA',
    },
    {
        HORA: '14:00 P.M',
        ESPECIALISTA: 'RAQUEL VILLASECA',
        PACIENTE: 'ANA SEPULVEDA',
        RUT: '14441281-0',
        PREVISION:'ISAPRE',
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
    for(i=0; i< dental.length ;i++){
        texto+= `
        
    <tr>
        <td>${dental[i].HORA}</td>
        <td>${dental[i].ESPECIALISTA}</td>
        <td>${dental[i].PACIENTE}</td>
        <td>${dental[i].RUT}</td>
        <td>${dental[i].PREVISION}</td>
    </tr>
        
        `

    }
document.getElementById("tabla_dental").innerHTML = texto;
document.getElementById("ultima").innerHTML = (`Primer Atención : ${dental[0].PACIENTE} - ${dental[0].PREVISION} 
| Ultima Atención : ${dental[5].PACIENTE} - ${dental[5].PREVISION}`);
document.getElementById("subtitulo").innerHTML = ("Estadísticas del centro médico ñuñoa")
document.getElementById("numero_atendidos").innerHTML = (`la cantidad de antencio de radiologia : ${dental.length}`);

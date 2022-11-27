function CalcularResultado(){
    const USUARIOS = 4;
    const PARTIDOS = 64;
    let puntaje = 0;
    for (uid=0; uid < USUARIOS; uid++){
        puntaje = 0;
        for(pid = 0; pid < PARTIDOS; pid++){ 
             let usr_loc = parseInt(document.getElementById("usr"+ uid+"_loc"+ pid).value);
             let usr_vis = parseInt(document.getElementById("usr"+ uid+"_vis"+ pid).value);
             let adm_loc = parseInt(document.getElementById("adm_loc"+ pid).value);
             let adm_vis = parseInt(document.getElementById("adm_vis"+ pid).value);
            if ( isNaN(usr_loc) || isNaN(usr_vis) || isNaN(adm_loc) || isNaN(adm_vis) ) {
                puntaje += 0; // partido no jugado
            } else if ( (usr_loc == adm_loc) && (usr_vis == adm_vis) ) {
                puntaje += 3; // envoco resultado exacto
            } else if (
                ( (usr_loc > usr_vis) && (adm_loc > adm_vis) ) ||
                ( (usr_loc < usr_vis) && (adm_loc < adm_vis) ) ||
                ( (usr_loc == usr_vis) && (adm_loc == adm_vis) )
            ) {
                puntaje += 1; // envoco resultado
            } else {
                puntaje += 0; // no envoco resultado
            }
        }
        document.getElementById("puntajeusr" + uid).value = puntaje;
        console.log(puntaje);
    }    
}


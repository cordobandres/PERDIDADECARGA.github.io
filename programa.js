
function mostrar_inputs(){
    var valL=document.getElementById("L").value;
    var valV=document.getElementById("V").value;
    var valD=document.getElementById("D").value;
    var undL=document.getElementById("Longitud").value;
    var undVd=document.getElementById("V1").value;
    var undVt=document.getElementById("V2").value;
    var undD=document.getElementById("Diametro").value;
    
    const unidadesDemedida=[undL,undVd, undD]
    const valoresDemedida=[valL,valV,valD]

    //CONVERSIÓN UNIDADES//
    for(i=0; i< unidadesDemedida.length;i++){
        if (unidadesDemedida[i]==0){
            valoresDemedida[i]=valoresDemedida[i]*1
        }
        else 
            if(unidadesDemedida[i]==1){ valoresDemedida[i]=valoresDemedida[i]*0.01
            }
        else
            if(unidadesDemedida[i]==2){ valoresDemedida[i]=valoresDemedida[i]*0.001
            }
        else
            if(unidadesDemedida[i]==3){ valoresDemedida[i]=valoresDemedida[i]*0.3048
            }
        else
            if(unidadesDemedida[i]==4){ valoresDemedida[i]=valoresDemedida[i]*0.0254
            }

    }

    if(undVt==1){
        valoresDemedida[1]=(valoresDemedida[1])/60
    }
    debugger;
}

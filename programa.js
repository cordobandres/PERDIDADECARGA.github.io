
function mostrar_inputs(){
    var valL=document.getElementById("L").value;
    var undL=document.getElementById("Longitud").value;
    var valD=document.getElementById("D").value;
    var undD=document.getElementById("Diametro").value;
    var valQ=document.getElementById("Caudal").value;
    var undQ=document.getElementById("Q").value;
    var undT=document.getElementById("T").value;
    
    const unidadesDemedida=[undL, undD]
    const valoresDemedida=[valL, valD]

    //CONVERSIÓN UNIDADES//

        //CONVERSIÓN LONGITUD Y DIAMETRO//
    for(i=0; i< unidadesDemedida.length;i++){
        if (unidadesDemedida[i]==0){
            valoresDemedida[i]=valoresDemedida[i]*1
        }
        else 
            if(unidadesDemedida[i]==1){ valoresDemedida[i]=valoresDemedida[i]*0.01   } 
        else
            if(unidadesDemedida[i]==2){ valoresDemedida[i]=valoresDemedida[i]*0.001  }
        else
            if(unidadesDemedida[i]==3){ valoresDemedida[i]=valoresDemedida[i]*0.3048 }
        else
            if(unidadesDemedida[i]==4){ valoresDemedida[i]=valoresDemedida[i]*0.0254 }

    }

    
        //CALCULO DEL AREA//

    var Area = (Math.PI)*(Math.pow(valoresDemedida[1],2)/4)
        

        //CONVERSIÓN CAUDAL//
    if(undQ==0){     valQ=valQ*1          }
    else
        if(undQ==1){ valQ=valQ*0.0000010  }
    else
        if(undQ==2){ valQ=valQ*0.001      }
    else
        if(undQ==3){ valQ=valQ*0.0283168  }
    else
        if(undQ==4){ valQ=valQ*0.00378541 }
    

        //CONVERSIÓN DEL TIEMPO//
    if(undT==1){
        valQ=(valQ)/60 }

        //CALCULO DE LA VELOCIDAD//

    var Velocidad = valQ/Area
    debugger;
}

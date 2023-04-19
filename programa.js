
function mostrar_inputs(){
    var valL=document.getElementById("L").value;
    var undL=document.getElementById("Longitud").value;
    var valD=document.getElementById("D").value;
    var undD=document.getElementById("Diametro").value;
    var valQ=document.getElementById("Caudal").value;
    var undQ=document.getElementById("Q").value;
    var undT=document.getElementById("T").value;
    var ValV=document.getElementById("V").value;
    var ValR=document.getElementById("R").value;
    var ValDL=document.getElementById("DL").value;

    const unidadesDemedida=[undL, undD]
    const valoresDemedida=[valL, valD, ValV, ValR, ValDL]

    //CONVERSIÓN UNIDADES//

        //CONVERSIÓN LONGITUD Y DIAMETRO//
    for(i=0; i< unidadesDemedida.length;i++){
        if (unidadesDemedida[i]==0){
            valoresDemedida[i]=valoresDemedida[i]*1.0
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

    var Velocidad = valQ/Area;

        //FUNCIONES//

        function colebrookWhite(Re, D, epsilon) {
            let f = 0.02;
            let f_old = f;
            let error = 1;
            
            while (error > 1 ) {
                const A = -2 * Math.log10((epsilon / D) / 3.7 + (2.51 / (Re * Math.sqrt(f))));
                const B = 1 / Math.sqrt(f);
                let df = -1 / (2 * Math.sqrt(f) * (Math.log(10) / 2) * (epsilon / D / 3.7 + 2.51 / (Re * Math.sqrt(f))));
            
                if (Math.abs(df) < 1e-10) { // verificar si el denominador es cercano a cero
                    df = Math.sign(df) * 1e-10; // establecer la derivada en un valor pequeño pero no nulo
                }
            
                f_old = f;
                f = f - (A - B) / df;
                error = Math.abs((f - f_old) / f_old);
                
            }
        
            return f;
        }
    
        //CALCULO DE REGIMEN LAMINAR//

    var Re = (Velocidad*valoresDemedida[1])/ValV
    var x = (((ValR)/(valoresDemedida[1])/(3.71))+((5.74)/(Math.pow(Re,0.9))))
    const D = valoresDemedida[1]
    if (Re>2100){
        var friccion = (0.25)/(Math.pow(Math.log10(x),2))
        var perdida1 = friccion*(valoresDemedida[0]/valoresDemedida[1])*((Math.pow(Velocidad,2)/(2*9.81)))
    }
    else{
        const friccion = colebrookWhite(Re, D, ValR);
        var perdida1 = friccion*(valoresDemedida[0]/valoresDemedida[1])*((Math.pow(Velocidad,2)/(2*9.81)))
    
    

    }

    window.alert("La perdida de carga es:   " + perdida1 +
    "  El Reynolds es:   " + Re + "  La fricción es:   " + friccion)
    debugger;



}


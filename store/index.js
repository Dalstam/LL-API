export const state =()=>({
    persInfo:{
        voornaam:'',
        achternaam:'',
        email:'',
        plaats:'',
        telefoon:'',
        toestel:''
    },
    uurInfo:{
        uren:''
    },     
    leeftijdInfo:{
        leeftijd: ''
    }, 
    OchtendJaofNee:{
        Ochtend: ''
    }, 
    AvondJaofNee:{
        Avond: ''
    }, 
    welkeFiets:{
        Fiets: ''
    }, 
    updateBericht:{
        bericht: ''
    }                                                                                                                                                                     
})

export const mutations = {  
    setpersInfo(state,value){
        state.persInfo.voornaam = value.voornaam;
        state.persInfo.achternaam = value.achternaam;
        state.persInfo.email = value.email;
        state.persInfo.plaats = value.plaats;
        state.persInfo.telefoon = value.telefoon;
        state.persInfo.toestel = value.toestel;
},
    setuurInfo(state,value){
        state.uurInfo.uren = value.uren;
},
    setleeftijdInfo(state,value){
        state.leeftijdInfo.leeftijd = value.leeftijd;
},
    setochtendJaofNee(state,value){
        state.OchtendJaofNee.Ochtend = value.Ochtend;
    },
    setavondJaofNee(state,value){
        state.AvondJaofNee.Avond = value.Avond;
    },
    setwelkeFiets(state,value){
        state.welkeFiets.Fiets = value.Fiets;
    },
    setupdateBericht(state,value) {
        state.updateBericht.bericht = value.bericht;
    }

}


export const getters = {
    persgetter(state){
        return state.persInfo;
    },
    uurgetter(state){
        return state.uurInfo;
    },
    leeftijdgetter(state){
        return state.leeftijdInfo;
    },
    Ochtendgetter(state){
        return state.OchtendJaofNee;
    },
    Avondgetter(state){
        return state.AvondJaofNee;
    },
    Fietsgetter(state){
        return state.welkeFiets;
    },
    berichtgetter(state){
        return state.updateBericht;
    }
}


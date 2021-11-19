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
    } ,                                                                                                                                                                        
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
}


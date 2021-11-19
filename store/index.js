export const state =()=>({
    persInfo:{
        voornaam:'',
        achternaam:'',
        email:'',
        plaats:'',
        telefoon:'',
        toestel:''
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
}}

export const getters={
    persgetter(state){
        return state.persInfo;
    }
}


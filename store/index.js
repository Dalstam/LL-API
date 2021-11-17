export const state =()=>({
    persInfo:{
        voornaam:'',
        achternaam:'',
        email:'',
        plaats:'',
        telefoonnummer:'',
        toestel:''
    }
})

export const mutations = {
    setpersInfo(state,value){
        state.persInfo.voornaam = value.voornaam;
}}

export const getters={
    persgetter(state){
        return state.persInfo;
    }
}
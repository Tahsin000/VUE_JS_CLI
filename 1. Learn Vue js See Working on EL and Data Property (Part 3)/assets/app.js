new Vue({
    el:"#app",
    data:{
        title:"Tahsin",
        isTrue: true,
        cars:["ford", "Toyota"],
        robot:{
            name: "Franky",
        },
        greeting:()=>{
            return "Ami Hotash !"
        }
    }
});
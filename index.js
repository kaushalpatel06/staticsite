
// const calcAverage=(a,b,c)=>(a+b+c)/3;

// const scoreDolphine=calcAverage(44,23,71)
// const scoreKorals=calcAverage(65,54,49)
// console.log(scoreDolphine,scoreKorals)

// const checkWinner=function (aveOfDolphine,aveOfKorals){
//     if (aveOfDolphine>=2*aveOfKorals){
//         console.log(`dolphine wins ${aveOfDolphine} vs ${aveOfKorals}`)
//     }else if(aveOfKorals>=2*aveOfDolphine){
//         console.log(`korals wins ${aveOfKorals} vs ${aveOfDolphine}`)

//     }
//     else{
//         console.log('no team wins')
//     }
// }

// checkWinner(scoreDolphine,scoreKorals)


// javascript object method

// const Mark_miller={
//     fullName:"Mark_miller",
//     mass:78,
//     height:1.69,
//     CalcBmi:function(){
//         this.bmi=this.mass/this.height**2;
//     }
// }
// const John_smith={
//     fullName:"John_smith",
//     mass:92,
//     height:1.95,
//     CalcBmi:function(){
//         this.bmi=this.mass/this.height**2;
//     }

// }


// const value1=Mark_miller.CalcBmi()
// const value2=John_smith.CalcBmi();

// if(value1>value2){
//     console.log(`${Mark_miller.fullName} is a ${Mark_miller.bmi} which is greater than ${John_smith.fullName}`)
//     console.log("mark wins")
// }
// else{
//     console.log(`${John_smith.fullName} is a ${John_smith.bmi} which is greater than ${Mark_miller.fullName}`)
//     console.log("john wins")

// }

//coding challenge steven coding calc challenges let

// const bills=[100,110,120,130,104,400,150,500,200.320,150,160,180];
// const calctip=(bill)=>{
//     return bill>=50 && bill<=300?bill*0.15:bill*0.2;

// }
// const tip=[]
// const total=[]

// for(var i=0;i<bills.length;i++){
//     const tips=calctip(bills[i]);
//     tip.push(tips);
//     total.push(tip+bills[i]);
// }
// console.log(bills,tip,total);

//new coding challange in tools and debugging series
const newArray=[17,21,23]
const arrForcast=function(temp){
        let str=''
        for(let i=0;i<temp.length;i++){
            str+=`${temp[i]} in ${i+1} days...`;//str=str+temp[i]
        }
        console.log(str)
}
arrForcast(newArray)

// map : creating new array : itreate the existing element in the array and callback function to each element 

// const numbers=[1,2,3,4,5]
// const mulnumber=numbers.map(num=>num*num)
// console.log(mulnumber)

// filter: function itrate the array and return the value which condtion is satisfied:
const numbers=[1,2,3,4,5]
const mynumbers=numbers.filter(num=>num%2==0)
console.log(mynumbers)

// reduce : reduce take a two parameters accumlator and current value :
const reducenumber=mynumbers.reduce((accumlator,currentvalue)=>accumlator+currentvalue,0)
console.log(reducenumber)

const str="  my name is  kaushal        and     ia    mmmm "
const tstr=str.split(' ')
const filterstr=tstr.filter(word=>word != '')
const joinstr=filterstr.join(' ')
console.log(filterstr)
console.log(joinstr)

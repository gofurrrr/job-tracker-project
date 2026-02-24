let interviewList = [];
let rejectList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectCount = document.getElementById('rejectCount');

const allFunctionBtn = document.getElementById('all-function-btn')
const interviewFunctionBtn = document.getElementById('interview-function-btn')
const rejectedFunctionBtn = document.getElementById('rejected-function-btn')

const allCardsSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
// const newSection = document.getElementById('new-section')




function calculateCount(){
    total.innerText = allCardsSection.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectList.length
}
calculateCount()
    // button funconality 
function toggleMove(id){
   allFunctionBtn.classList.add('bg-blue-100', 'text-black')
   interviewFunctionBtn.classList.add('bg-blue-100', 'text-black')
   rejectedFunctionBtn.classList.add('bg-blue-100', 'text-black')

   allFunctionBtn.classList.remove('bg-blue-500', 'text-amber-50')
   interviewFunctionBtn.classList.remove('bg-blue-500', 'text-amber-50')
   rejectedFunctionBtn.classList.remove('bg-blue-500', 'text-amber-50')


   const selected = document.getElementById(id)


   selected.classList.remove('bg-blue-100', 'text-black')
   selected.classList.add('bg-blue-500', 'text-amber-50')
}

mainContainer.addEventListener('click', function(event){
    const parenNode = event.target.parentNode.parentNode;
    const companyName = parenNode.querySelector('.companyName').innerText
    const jobRole = parenNode.querySelector('.jobRole').innerText
    const details = parenNode.querySelector('.details').innerText
    const status  = parenNode.querySelector('.status ').innerText
    const notes  = parenNode.querySelector('.notes ').innerText
   
   const cardInfo ={

       companyName,
       jobRole,
       details,
       status,
       notes
   }
   
const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName)

   if (!companyExist) {
    interviewList.push(cardInfo)
   }
   console.log(interviewList);

}
 )




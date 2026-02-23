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
const newSection = document.getElementById('new-section')




function calculateCount(){
    total.innerText = allCardsSection.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectList.length
}
calculateCount()

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

mainContainer.addEventListener('click ' , function (event){
     console.log(event.target.parentNode.parentNode);

    console.log(event.target.classList.contains('interview-btn')); {

     const parenNode = event.target.parentNode.parentNode;

    const companyName = parenNode.querySelector('.companyName').innerText
    const jobRole = parenNode.querySelector('.jobRole').innerText
    const details = parenNode.querySelector('.details').innerText
    const status = parenNode.querySelector('.status').innerText
    const notes = parenNode.querySelector('.notes').innerText

    const cardInfo = {
        companyName,
        jobRole,
        details,
        status,
        notes,
    }
    
    const interviewExist = interviewList.find(item=> item.companyName == cardInfo.companyName)
    parenNode.querySelector('.status').innerText = 'Interview'
    if(!interviewExist) {
        interviewList.push(cardInfo)
    }
    
    renderInterview()
}

 }
  )

  function renderInterview (){
    newSection.innerHTML = ''

    for(let interview of interviewList ){
        let div = document.createElement('div');
        div.className ='card flex justify-between pt-6 pl-5 pb-8'
        div.innerHTML = `
        <div class=" space-y-5">
                    <!-- part 1 -->
                     <div>
                        <p class="companyName  font-semibold text-2xl text-[#002C5C]">TechNova Ltd</p>
                        <p class="jobRole text-[#323B49]">Frontend Developer</p>
                        <br>
                        <p class="details  text-[#323B49]">Dhaka, Bangladesh - Full-time - Salary: 40,000 BDT</p>
                     </div>
                     <!-- part 2 -->
                      <div>
                        <button class="status   text-[#002C5C] bg-sky-100 px-2 py-2 mb-3 rounded-[5px]">  Not Applied</button>
                        <p class="notes">Build responsive UI using HTML, CSS, and JavaScript.</p>
                      </div>
                    <!-- part 3 -->
                     <div>
                        <button class="interview-btn px-5 py-2 text-green-400 border-2 rounded-[6px] ">Interview</button>
                        <button class="rejected-btn  px-5 py-2 text-red-400 border-2 rounded-[6px] ">Rejected</button>
                     </div>
                 </div>

                <!--main part-2-->
                <div >
                    
                    <button class="delete-btn "><img src="./Group 1.png" alt=""></button>
                </div>
        `
    }
  }
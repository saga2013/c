import add from './add.js'
import minsfunc from './minus.js'
import multiply from './multiply.js'
import devide from './divide.js'

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multi = document.getElementById('multi')
const delen = document.getElementById('devide')
const result = document.getElementById('result')

function getNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
  }
  
  plus.addEventListener('click', ()=>{
    const nums = getNumbers()
    if(nums) result.innerHTML= "Result:" + add(nums.num1, nums.num2)
  })
  minus.addEventListener('click', ()=>{
    const nums = getNumbers()
    if(nums) result.innerHTML= "Result:" + minsfunc(nums.num1, nums.num2)
  })
  multi.addEventListener('click', ()=>{
    const nums = getNumbers()
    if(nums) result.innerHTML= "Result:" + multiply(nums.num1, nums.num2)
  })
  delen.addEventListener('click', ()=>{
    const nums = getNumbers()
    if(nums) result.innerHTML= "Result:" + devide(nums.num1, nums.num2)
  })

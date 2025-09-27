let numbers_list = "1234567890.".split("");
let operator_list = "+-x%=".split("");
let numbers_section = document.querySelector(".numbers-section");
let operators_section = document.querySelector(".operators-section");
let screen_section = document.querySelector(".calculator-screen");
let bottom_section = document.querySelector(".bottom");
const stack = [];

function add(first, second)
{
    return parseFloat(first)+parseFloat(second);
}
function subtract(first, second)
{
    return parseFloat(first)-parseFloat(second);
}
function multiply(first,second)
{
    parseFloat(first)*parseFloat(second);
}
function divide(first,second)
{
    if(second == 0)
    {
        return "Error";
    }
    parseFloat(first)/parseFloat(second);
}

function operate(second, operator, first)
{
    if (operator == '+'){
        return add(first, second);
    }
    else if (operator == '-')
    {
        return subtract(first,second);
    }
    else if (operator == 'x')
    {
        return multiply(first,second);
    }
    else
    {
        return divide(first,second);
    }
}

function updateDisplay()
{
    screen_section.textContent = stack.join(" ");
}

function updateStack(character)
{
    if(character == "=")
    {
        let result = operate(stack.pop(), stack.pop(), stack.pop());
        stack.push(result);
        return;
    }
    stack.push(character);
}

function addButton(parent_node, character)
{
    let new_node = document.createElement("div");
    new_node.textContent = character;
    new_node.className = "button";
    new_node.addEventListener("mouseenter",()=>{
        new_node.style.backgroundColor = "yellow";
    });
    new_node.addEventListener("mouseleave",()=>{
        new_node.style.backgroundColor = "white";
    });
    new_node.addEventListener("click",(event)=>{
        let clicked_character = event.target.textContent;
        updateStack(clicked_character);
        updateDisplay();
        bottom_section.textContent+=" "+ clicked_character;
    });
    parent_node.append(new_node);
}

numbers_list.forEach((value)=>{
    addButton(numbers_section,value);
})

operator_list.forEach((value)=>{
    addButton(operators_section,value);
})

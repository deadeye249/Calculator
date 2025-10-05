const numbers_list = "1234567890.".split("");
const operator_list = "+-x/=".split("");
const numbers_section = document.querySelector(".numbers-section");
const operators_section = document.querySelector(".operators-section");
const screen_section = document.querySelector(".calculator-screen");
const bottom_section = document.querySelector(".bottom");
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
    return parseFloat(first)*parseFloat(second);
}
function divide(first,second)
{
    if(second == 0)
    {
        return "Error";
    }
    return parseFloat(first)/parseFloat(second);
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
    screen_section.textContent = stack.join("");
}

function updateStack(character)
{
    if(character == "=")
    {
        const result = operate(stack.pop(), stack.pop(), stack.pop());
        stack.push(result);
        return;
    }
    else if(character == "C")
    {
        stack.length = 0;
        return;
    }
    else if(character == "Del")
    {
        if(stack[stack.length-1].length>1)
        {
            stack[stack.length-1] = stack[stack.length-1].slice(0,-1);
        }
        else
        {
            stack.pop();
        }
        return;
    }
    stack.push(character);
}

function addButton(parent_node, character)
{
    const new_node = document.createElement("div");
    new_node.textContent = character;
    new_node.className = "button";
    if(parent_node == operators_section)
    {
        new_node.className += " operator";
    }
    new_node.addEventListener("mouseenter",(event)=>{
        event.target.style.backgroundColor = "yellow";
    });
    new_node.addEventListener("mouseleave",(event)=>{
        if(event.target.className == "button operator")
        {
            event.target.style.backgroundColor = "lightblue";
        }
        else
        {
            event.target.style.backgroundColor = "white";
        }
    });
    new_node.addEventListener("click",(event)=>{
        const clicked_character = event.target.textContent;
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

addButton(numbers_section,"C");
addButton(operators_section,"Del");

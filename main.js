const calculator_body = document.querySelector(".calculator-body");
const screen_section = document.querySelector(".calculator-screen");
const bottom_section = document.querySelector(".bottom");
const buttons = document.querySelectorAll(".button");
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
        return "Error: Divided by 0";
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
    else if (operator == '%')
    {
        return divide(first,second);
    }
    else
    {
        return "Error: Invalid Operator";
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
        const result = operate(stack.pop(), stack.pop(), stack.pop());
        stack.push(result);
        return;
    }
    stack.push(character);
}

function updateButton(node, character)
{
    new_node.textContent = character;
    new_node.className = "button";
    new_node.addEventListener("mouseenter",()=>{
        new_node.style.backgroundColor = "yellow";
    });
    new_node.addEventListener("mouseleave",()=>{
        new_node.style.backgroundColor = "white";
    });
    new_node.addEventListener("click",(event)=>{
        const clicked_character = event.target.textContent;
        updateStack(clicked_character);
        updateDisplay();
        bottom_section.textContent+=" "+ clicked_character;
    });
}



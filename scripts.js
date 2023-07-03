let startBtn = document.getElementById("start-btn");
let addOperator = document.getElementById("add");
let subtractOperator = document.getElementById("subtract");
let multiplyOperator = document.getElementById("multiply");
let divideOperator = document.getElementById("divide");
let xtraButton = document.getElementById("xtra");
let mainScreen = document.getElementById("main-screen");
let panelWrapper = document.getElementById("panel-wrapper");
let inputsSection = document.getElementById("inputs-wrapper");
let operatorsWrapper = document.getElementById("operators-wrapper");
let operationOutcome;
let clearButton = document.getElementById("clear-btn");
let visitorInfo = prompt("What's your name?... :)");
let welcomeMsg = alert("# Welcome " + visitorInfo + " Choose and use an operator :)\n# Major improvements & additions to interactivity!\n# Updated Visuals such as info and color spectrum!\n# Simplicity assured!\n# Version 1.6 (major)");
let topHeader = document.getElementById("top-header");
let calcSettingsBtn = document.getElementById("calc-settings-btn");
let personalWrapper = document.getElementById("personal-wrapper");
let notePiece = document.getElementById("note");
let notes = document.getElementsByClassName("note");
let welcomeMssgs = document.getElementById("welcome-mssgs");

topHeader.innerHTML = "USER \n" + "[" + visitorInfo.toUpperCase() + "]";

if (visitorInfo == "") {
  visitorInfo = "Guest User";
  topHeader.innerText = "[" + visitorInfo.toUpperCase() + "]";
} else {
  topHeader.innerText = "USER \n" + "[" + visitorInfo.toUpperCase() + "]";
}

let currentOperator;

addOperator.addEventListener("click", function() {
  topHeader.innerHTML = "INPUTS";
  addOperator.style.display = "none";
  subtractOperator.style.display = "none";
  multiplyOperator.style.display = "none";
  divideOperator.style.display = "none";
  welcomeMssgs.style.display = "none";
  currentOperator = document.createElement("h2");
  currentOperator.textContent = "ADDITION";
  currentOperator.setAttribute("class", "current-operator");
  operatorsWrapper.appendChild(currentOperator);
  xtraButton.style.display = "none";

  const addInput1 = document.createElement("input");
  addInput1.setAttribute("class", "value-input");
  addInput1.setAttribute("placeholder", "+");
  inputsSection.appendChild(addInput1);
  const addInput2 = document.createElement("input");
  addInput2.setAttribute("class", "value-input");
  addInput2.setAttribute("placeholder", "+");
  inputsSection.appendChild(addInput2);
  operationOutcome = document.createElement("button");
  operationOutcome.setAttribute("class", "operator");
  operationOutcome.setAttribute("id", "ans-btn");
  operationOutcome.innerHTML = "ENTER";
  operationOutcome.onclick = function() {
    topHeader.innerText = "User: " + visitorInfo;
    clearButton.style.display = "block";
    addOperator.style.display = "block";
    subtractOperator.style.display = "block";
    multiplyOperator.style.display = "block";
    divideOperator.style.display = "block";
    xtraButton.style.display = "block";
    welcomeMssgs.style.display = "block";
    currentOperator.remove();

    const resultPanel = document.createElement("div");
    resultPanel.setAttribute("class", "result-panel");
    resultPanel.setAttribute("id", "result-element");
    panelWrapper.appendChild(resultPanel);
    const result = parseInt(addInput1.value) + parseInt(addInput2.value);
    resultPanel.innerHTML = addInput1.value + " + " + addInput2.value + " = " + result;
    addInput1.remove();
    addInput2.remove();
    operationOutcome.remove();
  }
  inputsSection.appendChild(operationOutcome);
});

subtractOperator.addEventListener("click", function() {
  topHeader.innerText = "INPUTS";
  subtractOperator.style.display = "none";
  addOperator.style.display = "none";
  multiplyOperator.style.display = "none";
  divideOperator.style.display = "none";
  welcomeMssgs.style.display = "none";
  currentOperator = document.createElement("h2");
  currentOperator.textContent = "SUBTRACTION";
  currentOperator.setAttribute("class", "current-operator");
  operatorsWrapper.appendChild(currentOperator);
  xtraButton.style.display = "none";

  const subtractInput1 = document.createElement("input");
  subtractInput1.setAttribute("class", "value-input");
  subtractInput1.setAttribute("placeholder", "-");
  inputsSection.appendChild(subtractInput1);
  const subtractInput2 = document.createElement("input");
  subtractInput2.setAttribute("class", "value-input");
  subtractInput2.setAttribute("placeholder", "-");
  inputsSection.appendChild(subtractInput2);
  operationOutcome = document.createElement("button");
  operationOutcome.setAttribute("class", "operator");
  operationOutcome.setAttribute("id", "ans-btn");
  operationOutcome.innerHTML = "ENTER";
  operationOutcome.onclick = function() {
    topHeader.innerText = "User: " + visitorInfo;
    clearButton.style.display = "block";
    subtractOperator.style.display = "block";
    addOperator.style.display = "block";
    subtractOperator.style.display = "block";
    multiplyOperator.style.display = "block";
    divideOperator.style.display = "block";
    xtraButton.style.display = "block";
    welcomeMssgs.style.display = "block";
    currentOperator.remove();

    const resultPanel = document.createElement("div");
    resultPanel.innerHTML = "Your Result:";
    resultPanel.setAttribute("class", "result-panel");
    resultPanel.setAttribute("id", "result-element");
    panelWrapper.appendChild(resultPanel);
    const result = parseInt(subtractInput1.value) - parseInt(subtractInput2.value);
    resultPanel.innerHTML = subtractInput1.value + " - " + subtractInput2.value + " = " + result;
    subtractInput1.remove();
    subtractInput2.remove();
    operationOutcome.remove();
  }
  inputsSection.appendChild(operationOutcome);
});

multiplyOperator.addEventListener("click", function() {
  topHeader.innerText = "INPUTS";
  multiplyOperator.style.display = "none";
  addOperator.style.display = "none";
  subtractOperator.style.display = "none";
  divideOperator.style.display = "none";
  welcomeMssgs.style.display = "none";
  currentOperator = document.createElement("h2");
  currentOperator.textContent = "MULTIPLICATION";
  currentOperator.setAttribute("class", "current-operator");
  operatorsWrapper.appendChild(currentOperator);
  xtraButton.style.display = "none";

  const multiplyInput1 = document.createElement("input");
  multiplyInput1.setAttribute("class", "value-input");
  multiplyInput1.setAttribute("placeholder", "x");
  inputsSection.appendChild(multiplyInput1);
  const multiplyInput2 = document.createElement("input");
  multiplyInput2.setAttribute("class", "value-input");
  multiplyInput2.setAttribute("placeholder", "x");
  inputsSection.appendChild(multiplyInput2);
  operationOutcome = document.createElement("button");
  operationOutcome.setAttribute("class", "operator");
  operationOutcome.setAttribute("id", "ans-btn");
  operationOutcome.innerHTML = "ENTER";
  operationOutcome.onclick = function() {
    topHeader.innerText = "User: " + visitorInfo;
    clearButton.style.display = "block";
    multiplyOperator.style.display = "block";
    addOperator.style.display = "block";
    subtractOperator.style.display = "block";
    divideOperator.style.display = "block";
    currentOperator.remove();
    xtraButton.style.display = "block";
    welcomeMssgs.style.display = "block";

    const resultPanel = document.createElement("div");
    resultPanel.setAttribute("class", "result-panel");
    resultPanel.setAttribute("id", "result-element");
    panelWrapper.appendChild(resultPanel);
    const result = parseInt(multiplyInput1.value) * parseInt(multiplyInput2.value);
    resultPanel.innerHTML = multiplyInput1.value + " x " + multiplyInput2.value + " = " + result;
    multiplyInput1.remove();
    multiplyInput2.remove();
    operationOutcome.remove();
  }
  inputsSection.appendChild(operationOutcome);
});

divideOperator.addEventListener("click", function() {
  topHeader.innerText = "INPUTS";
  divideOperator.style.display = "none";
  addOperator.style.display = "none";
  subtractOperator.style.display = "none";
  multiplyOperator.style.display = "none";
  welcomeMssgs.style.display = "none";
  currentOperator = document.createElement("h2");
  currentOperator.textContent = "DIVISION";
  currentOperator.setAttribute("class", "current-operator");
  operatorsWrapper.appendChild(currentOperator);
  xtraButton.style.display = "none";

  const divideInput1 = document.createElement("input");
  divideInput1.setAttribute("class", "value-input");
  divideInput1.setAttribute("placeholder", "/")
  inputsSection.appendChild(divideInput1);
  const divideInput2 = document.createElement("input");
  divideInput2.setAttribute("class", "value-input");
  divideInput2.setAttribute("placeholder", "/")
  inputsSection.appendChild(divideInput2);
  operationOutcome = document.createElement("button");
  operationOutcome.setAttribute("class", "operator");
  operationOutcome.setAttribute("id", "ans-btn");
  operationOutcome.innerHTML = "ENTER";
  operationOutcome.onclick = function() {
    topHeader.innerText = "User: " + visitorInfo;
    clearButton.style.display = "block";
    divideOperator.style.display = "block";
    addOperator.style.display = "block";
    subtractOperator.style.display = "block";
    multiplyOperator.style.display = "block";
    welcomeMssgs.style.display = "block";
    currentOperator.remove();
    xtraButton.style.display = "block";

    const resultPanel = document.createElement("div");
    resultPanel.setAttribute("class", "result-panel");
    resultPanel.setAttribute("id", "result-element");
    panelWrapper.appendChild(resultPanel);
    const result = parseInt(divideInput1.value) / parseInt(divideInput2.value);
    resultPanel.innerHTML = divideInput1.value + " / " + divideInput2.value + " = " + result;
    divideInput1.remove();
    divideInput2.remove();
    operationOutcome.remove();
  }
  inputsSection.appendChild(operationOutcome);
});

xtraButton.addEventListener("click", function() {
  panelWrapper.style.display = "none";

  const extraContent = document.createElement("div");
  extraContent.setAttribute("class", "extra-content");
  mainScreen.appendChild(extraContent);

  const notePanel = document.createElement("div");
  notePanel.setAttribute("class", "note-panel");
  extraContent.appendChild(notePanel);

  const noteField = document.createElement("input");
  noteField.setAttribute("type", "text");
  noteField.setAttribute("class", "note-field");
  noteField.setAttribute("id", "note-field");
  notePanel.appendChild(noteField);

  const addNote = document.createElement("button");
  addNote.innerHTML = "POST NOTE";
  addNote.setAttribute("class", "note-btn");
  addNote.setAttribute("title", "add a note");
  notePanel.appendChild(addNote);
  
  const runBtn = document.createElement("button");
  runBtn.innerHTML = "RUN CMD";
  runBtn.setAttribute("class", "note-btn");
  notePanel.appendChild(runBtn);

  runBtn.onclick = function() {
    if (noteField.value == "") {
      alert("!No Command Entered!")
    } else if (noteField.value == "/projects") {
        alert("!Command Accepted!");
        extraContent.style.display = "none";

        const projectMenu = document.createElement("div");
        projectMenu.setAttribute("class", "project-menu");
        mainScreen.appendChild(projectMenu);

        const project1 = document.createElement("a");
        project1.innerHTML = "OPTION MENU";
        project1.setAttribute("href", "options.html");
        project1.setAttribute("target", "_blank");
        project1.setAttribute("class", "projects");
        projectMenu.appendChild(project1);

        const project2 = document.createElement("a");
        project2.innerHTML = "AMBIENT FORM";
        project2.setAttribute("href", "regform.html");
        project2.setAttribute("target", "_blank");
        project2.setAttribute("class", "projects");
        projectMenu.appendChild(project2);

        const project3 = document.createElement("a");
        project3.innerHTML = "MYSTERY BOXES";
        project3.setAttribute("href", "mysteryBoxes.html");
        project3.setAttribute("target", "_blank");
        project3.setAttribute("class", "projects");
        projectMenu.appendChild(project3);

        const returnBtn2 = document.createElement("button");
        returnBtn2.innerHTML = "HOME";
        returnBtn2.setAttribute("class", "note-btn");
        projectMenu.appendChild(returnBtn2);

        returnBtn2.onclick = function() {
        projectMenu.style.display = "none";
        panelWrapper.style.display = "block";
      }
      
      const returnBtn3 = document.createElement("button");
      returnBtn3.innerHTML = "Return";
      returnBtn3.setAttribute("class", "note-btn");
      projectMenu.appendChild(returnBtn3);

      returnBtn3.onclick = function() {
        projectMenu.style.display = "none";
        extraContent.style.display = "block";
      }
      } else if (noteField.value == "/randomNumGen") {
          alert("!Command Accepted!");
          extraContent.style.display = "none";
          const numberGen = document.createElement("a");
          numberGen.innerHTML = "Random Number Generator";
          numberGen.setAttribute("href", "randomNumGenerator.html");
          numberGen.setAttribute("target", "_blank");
          numberGen.setAttribute("class", "projects");
          mainScreen.appendChild(numberGen);
      } else if (noteField.value == "/paintBoard") {
          const paintBoardFunc = function() {
            extraContent.style.display = "none";
            alert("!Command Accepted!");
            const paintBoard = document.createElement("a");
            paintBoard.innerHTML = "PAINT BOARD";
            paintBoard.setAttribute("href", "paint.html");
            paintBoard.setAttribute("target", "_blank");
            paintBoard.setAttribute("class", "projects");
            mainScreen.appendChild(paintBoard);
          }
          paintBoardFunc();
      } else if (noteField.value == "/bgChanger") {
          alert("!Command Accepted!");
          extraContent.style.display = "none";
          const bgChanger = document.createElement("a");
          bgChanger.innerHTML = "Interactive Background Changer";
          bgChanger.setAttribute("class", "projects");
          bgChanger.setAttribute("href", "InterativeBoxBgChanger.html");
          bgChanger.setAttribute("target", "_blank");
          mainScreen.appendChild(bgChanger);
      } else {
        alert("!Command Declined!");
      }
  }

  addNote.onclick = function() {
    const note = document.createElement("p");
    note.setAttribute("class", "note");
    note.setAttribute("id", "note");
    noteOutput.appendChild(note);

    if (note.length > 50) {
      note.value = "<br>";
    }

    if (noteField.value == "") {
      let responsesArr = ["You still didn't write anything, it's okay if you don't like this function you access my other projects through commands!", "As you probably noticed by now each time you post there is a different message. I aim to make my program as responsive as possible.", "You didn't write anything", "Come on, the field is still empty", "Are you serius?", "You need to enter something!!", "That's it, I give up :(", "if you happen to get this message. Good news is I will continue adding further functionality.", "If you don't wanna write anything, return to the calculator " + visitorInfo + "! :)"];
      let randomResponse = responsesArr [Math.floor(Math.random()*responsesArr.length)];
      note.innerHTML = "[System]: " + randomResponse + ", " + visitorInfo + "!";
    } else {
      note.innerHTML = "[" + visitorInfo + "]: " + noteField.value;
    }
  }

  const deleteNote = document.createElement("button");
  deleteNote.innerHTML = "CLEAR NOTE";
  deleteNote.setAttribute("class", "note-btn");
  deleteNote.setAttribute("title", "delete a note");
  notePanel.appendChild(deleteNote);

  deleteNote.onclick = function() {
      const result = document.getElementById("note");
      result.remove();
  }

  const noteOutput = document.createElement("div");
  noteOutput.setAttribute("class", "note-output");
  noteOutput.setAttribute("id", "note-output");
  extraContent.appendChild(noteOutput);

  const returnBtn = document.createElement("button");
  returnBtn.innerHTML = "HOME";
  returnBtn.setAttribute("class", "note-btn");
  returnBtn.setAttribute("title", "return to calculator");
  extraContent.appendChild(returnBtn);

  returnBtn.onclick = function() {
    extraContent.style.display = "none";
    panelWrapper.style.display = "block";
  }

  const infoBtn = document.createElement("button");
  infoBtn.innerHTML = "HELP";
  infoBtn.setAttribute("class", "note-btn");
  notePanel.appendChild(infoBtn);

  infoBtn.onclick = function() {
    alert("# Interactive Note Creator\n# Ability to run commands!\n# Available commands are: /projects, /randomNumGen, /paintBoard, /bgChanger");
  }
})

clearButton.addEventListener("click", function() { // clear function
  const element = document.getElementById("result-element");
  element.remove();
})

// version 1.2:
// Added delete function
// Improved looks and interactivity

// Version 1.3:
// More suitable style modifications were made with further look improvement.
// Note section added!
// Further functions added


// Version 1.4:
// More detail added!
// Interface is simpler
// Even better improvements in aesthetics!

// Version 1.5:
// Improved functioning and details
// Colors made more suitable and readable
// Fixed small aspects

// Version 1.6 (major):
// Major improvements & additions to interactivity!
// Updated Visuals such as info and color spectrum!
// Simplicity assured!
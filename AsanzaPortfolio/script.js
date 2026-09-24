const project = document.getElementById("project");

const project1 = document.getElementById("project1");

const project2 = document.getElementById("project2");

project.addEventListener(
    "mouseover", function() {
        project.style.transform = "scale(1.05)";
    }
);

project.addEventListener(
    "mouseout", function() {
        project.style.transform = "scale(1)";
    }
);


project1.addEventListener(
    "mouseover", function() {
        project1.style.transform = "scale(1.05)";
    }
);

project1.addEventListener(
    "mouseout", function() {
        project1.style.transform = "scale(1)";
    }
);


project2.addEventListener(
    "mouseover", function() {
        project2.style.transform = "scale(1.05)";
    }
);

project2.addEventListener(
    "mouseout", function() {
        project2.style.transform = "scale(1)";
    }
);


const btn = document.getElementById("btn");

btn.addEventListener(
    "mouseover", function() {
        btn.style.transform = "scale(1.05)";
    }
);

btn.addEventListener(
    "mouseout", function() {
        btn.style.transform = "scale(1)";
    }
);

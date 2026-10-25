console.log(document)

const Message = document.getElementById
("message")
const Button = document.getElementById
("load-button")
const Button1 = document.getElementById
("load-button1")


function loadmessage() {
    return new Promise(function(resolve){
        
        setTimeout(function(){
            resolve("Checking Accounts...")
        }, 1500)
        Message.style.color = "Blue"
    })
}

Button.addEventListener ("click", function(){
    Message.innerHTML = "Loading..."

    loadmessage()

    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Checking Results...")
            }, 1500)
            Message.style.color = "Red"
        })
    })
    .then(function(result){
        Message.innerHTML = result
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve ("Welcome to PDM!")
            }, 1500)
            Message.style.color = "Yellow"
        })
    })

    .then(function(result){
        Message.innerHTML = result
        Message.style.color = "Green"
    })
})

//button2
const Profile = document.getElementById
("profile")
const Grades = document.getElementById
("grades")
const Schedule = document.getElementById
("sched")

Button1.addEventListener ("click", function(){

    Profile.innerHTML = "Profile: Waiting..." 
    Grades.innerHTML = "Grades: Waiting..."
    Schedule.innerHTML = "Schedule: Waiting..."

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            Profile.style.color = "Blue"
            Grades.style.color = "Red"
            Schedule.style.color = "Green"
            Profile.innerHTML = "Profile: Loaded"
            resolve();
        }, 1000)
    })

    const gradesPromise = new Promise(function(resolve){
        setTimeout(function(){
            Grades.style.color = "Green"
            Schedule.style.color = "Blue"
            Profile.style.color = "Red"
            Grades.innerHTML = "Grades: Loaded"
            resolve();
        }, 1200)
    })

    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            Schedule.style.color = "Red"
            Profile.style.color = "Greem"
            Grades.style.color = "Blue"
            Schedule.innerHTML = "Schedules: Loaded"
            resolve();
        }, 1400)   
    })

    Promise.all([profilePromise, gradesPromise, schedulePromise])

    .then (function(){
        setTimeout(function(){
        Message.style.color = "Red"
        Message.innerHTML = "Dashboard Ready!"
        }, 1000)
        
    })

})




App.js

 

 

//view button for function

 

const render = function () {

  $("#list").empty();

  for (let i = 0; i < employeeList.length; i++) {

    $("#list").append(`<li>${employeeList[i].name} | ${employeeList[i].officeNum} | ${employeeList[i].phoneNum}</li>`)

  }

};

$('#view').on("click", render);

 

 

// document.getElementById("demo").innerHTML =

// employeeList.name + " "+ employeeList.officeNum + " " + employeeList.phoneNum;

 

 

 

 

alert (employeeList);

              const command = prompt(' view,add,verify, update, delete');

              function choice () {

                //Adding a name to the list//

                if (command == 'add') {

             

                  let employee = prompt('employee Name?');

                  employeeListList.push(employee);

                  alert(employeeList);

                }

             

              //Updating list//

                if (command == 'update') {

                  let employee = prompt('employee Name?');

                  for (let i = 0; i < employeetList.length; i++) {

                    if (employee == employeeList[i]) {

                      let newEmployee = prompt('New Employee Name?');

                      employeeList.splice(i, 1, newEmployee);

                      alert(employeeList);

                    }

                  }

                }

              }

             

              //Deleting a name from list//

              if (command == 'delete') {

                let employee = prompt('Employee Name you want to delete?');

                for (let i = 0; i < employeeList.length; i++) {

                  if (employee == employeeList[i]) {

                    employeeList.splice(i,1);

                    alert(employeeList);

                  }

                }

              }

 

 

 

document.querySelector('button').addEventListener('click', function(e) {

  var form = document.querySelector('form'),

      list = document.getElementById('list');

 

  list.innerHTML = [].map.call(form.querySelectorAll('input'), function(el) {

    return '<li>' + el.value + '</li>';

  }).join('');

});
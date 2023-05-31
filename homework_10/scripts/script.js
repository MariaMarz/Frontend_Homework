const users = [];

    function addUser(firstName, lastName, age) {
      const user = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      users.push(user);
      rerender();
    }

    function removeUser(id) {
      users = users.filter(function(user) {
        return user.id !== id;
      });
      rerender();
    }

    function rerender() {
      const container = document.getElementById("userContainer");
      container.innerHTML = ""; 

      users.forEach(function(user) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = "<h3>" + user.firstName + " " + user.lastName + "</h3>" +
                         "<p>Возраст: " + user.age + "</p>";
        card.addEventListener("dblclick", function() {
          removeUser(user.id);
        });

        container.appendChild(card);
      });
    }

    document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const age = document.getElementById("age").value;

      addUser(firstName, lastName, age);

      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("age").value = "";
    });
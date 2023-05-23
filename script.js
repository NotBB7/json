const squad = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  };
  
  const squadElement = document.getElementById("superhero");
  
  // Construction de la structure HTML pour afficher les informations
  let html = "<h1>" + squad.squadName + "</h1>";
  html += "<p><strong>Home Town:</strong> " + squad.homeTown + "</p>";
  html += "<p><strong>Formed:</strong> " + squad.formed + "</p>";
  html += "<p><strong>Secret Base:</strong> " + squad.secretBase + "</p>";
  html += "<p><strong>Active:</strong> " + squad.active + "</p>";
  html += "<h2>Members:</h2>";
  html += "<ul>";
  
  // Parcours des membres du groupe et ajout de leurs informations
  squad.members.forEach(function(member) {
    html += "<li>";
    html += "<p><strong>Name:</strong> " + member.name + "</p>";
    html += "<p><strong>Age:</strong> " + member.age + "</p>";
    html += "<p><strong>Secret Identity:</strong> " + member.secretIdentity + "</p>";
    html += "<p><strong>Powers:</strong></p>";
    html += "<ul>";
  
    // Parcours des pouvoirs du membre et ajout de leur liste
    member.powers.forEach(function(power) {
      html += "<li>" + power + "</li>";
    });
  
    html += "</ul>";
    html += "</li>";
  });
  
  html += "</ul>";
  
  // Insertion du code HTML dans l'élément avec l'ID "superhero"
  squadElement.innerHTML = html;
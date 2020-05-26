acceso() {
        var usuario = document.getElementById('nombre').value;
        var contraseña = document.getElementById('contraseña').value;

        var usuarios = ["Alvaro", "Cris", "Javier"];
        var contraseñas = ["1234", "4321", "2314"];


        
          if (usuarios[i]==usuario && contraseñas[i]==contraseña) {
            alert("Acceso concedido");
            i=3;
          }

        

      }
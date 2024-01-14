var n = document.getElementById("n")
        var a = document.getElementById("a")
        var g = document.getElementsByName("Gender")
        var c = document.getElementById("c")
        var e = document.getElementById("e")
        var save = document.querySelector(".btnsave")
        var nr = document.getElementById("nr")
        var ar = document.getElementById("ar")
        var gr = document.getElementById("gr")
        var cr = document.getElementById("cr")
        var er = document.getElementById("er")
        var tab = document.querySelector(".tab")
        var ans = document.querySelector(".ans")

        function genresult() {
            for (let i = 0; i < g.length; i++) {
                if (g[i].checked) {
                    return gr.value = g[i].value;
                }
            }
        }

        save.addEventListener("click", function () {
            event.preventDefault()

            var div = document.createElement("tr")
            div.setAttribute("class", "ans")
            div.innerHTML = `<tr >
                        <td><input type="text" class="ir" value="${nr.value = n.value}"></td>
                        <td><input type="text" class="ir" value="${ar.value = a.value}"></td>
                        <td><input type="text" class="ir" value="${genresult()}"></td>
                        <td><input type="text" class="ir" value="${cr.value = c.value}"></td>
                        <td><input type="text" class="ir" value="${er.value = e.value}"></td>
                        <td><button onclick="Delete(event)" class="btn">Delete</button></td>
                    </tr>`
            tab.append(div)
        })

        var d1 = document.querySelector(".btn")

        function Delete(event) {
            event.target.closest("tr").remove()
        }
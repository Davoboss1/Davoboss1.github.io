let pause = false;
        let all_indicators = document.querySelectorAll(".indicators > div");
        let all_items = document.querySelectorAll(".item");
        let timer;
        let current_count = 0;
        //Animates top indicator

        function indicator_control(elem, percent) {

            let animatingElem = document.createElement("span");
            //remove any previous element inside 
            elem.innerHTML = "";
            elem.appendChild(animatingElem);
            animatingElem.style.width = `${percent}%`;
        }

        function toggleDisplay(index) {
            all_items.forEach(function (elem) {
                elem.classList.remove("active");
            })
            all_items[index].classList.add("active");
            all_items[index].classList.add("rollIn");

        }
        function switchDisplay(count = 0) {
            let percent = 0;
            timer = setInterval(function () {
                console.log(count);
                indicator_control(all_indicators[count], percent);
                if (percent == 100) {
                    percent = 0;
                    count++;
                    if(count >= all_items.length){count=0;}
                    current_count = count;
                    toggleDisplay(count);
                }
                percent++;
            }, 100);

            percent = 0;

            if(count >= all_items.length || count < 0){count=0;}
            current_count = count;

            toggleDisplay(count);
            return timer;
        }

        switchDisplay();

        all_items.forEach(function (elem) {
            elem.onclick = function () {
                pause = !pause;
                clearInterval(timer);
                if (pause == false) {
                    timer = switchDisplay(current_count);
                }
            }
        });

        //next and previous event listeners
        document.querySelector(".left-side").onclick = function (params) {
            clearInterval(timer);
            indicator_control(all_indicators[current_count], 100);
            timer = switchDisplay(current_count - 1);

        }

        document.querySelector(".right-side").onclick = function (params) {
            clearInterval(timer);
            indicator_control(all_indicators[current_count], 100);
            timer = switchDisplay(current_count + 1);
        }


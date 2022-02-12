const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => flipSwitch(e.target)))

function flipSwitch(clickedSwitch) {
  if(good.checked && cheap.checked && fast.checked) {
    if(good === clickedSwitch) {
      fast.checked = false
    }

    if(cheap === clickedSwitch) {
      good.checked = false
    }

    if(fast === clickedSwitch) {
      cheap.checked = false
    }
  }
}

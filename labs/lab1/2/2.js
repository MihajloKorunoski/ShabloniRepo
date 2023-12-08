function formSubmit() {
    let form = document.forms['form']

    let name = form['name'].value.trim()
    let stageName = form['stageName'].value.trim()
    let gender = form.querySelector('input[name="gender"]:checked')
    let genreSelect = document.getElementById('genre')
    let genreText = genreSelect.options[genreSelect.selectedIndex].text

    if (name === "" || stageName === "" || !gender) {
        alert('Сите полиња се задолжителни')
        return
    }

    alert(`${name} ${stageName}, ${gender.value}, ${genreText} - Успешно се пријавивте`)
}
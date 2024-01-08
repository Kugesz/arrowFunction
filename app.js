const fordit = () => {
    input = document.getElementById('input').value;
    console.log(input);
    document.getElementById('output').textContent = input.split('').reverse().join('');
}

document.getElementById('submit').addEventListener('click', fordit);
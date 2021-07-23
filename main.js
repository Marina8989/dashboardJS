const sideNav = document.querySelector('.sideNav');
const iconsSideNav = Array.from(document.getElementsByClassName('sideDiv'));



iconsSideNav.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.children[1].style.display = 'block';
    })
    item.addEventListener('mouseleave', () => {
        item.children[1].style.display = 'none';
    })
})



let myChart = document.getElementById('myChart').getContext('2d');
        let newChart = new Chart(myChart, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'TRAFFIC',
                    data: [2800, 2825, 2850, 2875, 2900, 2925, 2950, 2975, 3000],
                    borderColor: ['rgb(75, 192, 192)', 'rgb(55, 134, 164)', 'rgb(125, 92, 92)', 'rgb(84, 25, 183)', 'rgb(75, 36, 192)', 'rgb(92, 92, 125)', 'rgb(50, 112, 142)'],
                    tension: 0.1
                }],
   
            }
        })
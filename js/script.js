// Этот скрипт раскрывает/сворачивает меню при клике (для мобильных устройств)
document.querySelector('.dropbtn').addEventListener('click', function() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

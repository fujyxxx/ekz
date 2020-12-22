<script>
let year = 300 // год
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) // проверка на високосность
{
console.log('Да')
}
else
{
console.log('Нет')
}
</script>
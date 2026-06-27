const password = "wizard123"

switch(true){
    case password.length<8:
        console.log( 'პაროლი არის მოკლე')
        break
    case 8<=password.length && password.length<=12:
        console.log('პაროლი არის კარგი სიგრძის')
        break
    default:
        console.log('პაროლი არის იდეალური ზომის')
}

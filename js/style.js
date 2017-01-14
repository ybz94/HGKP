/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-10 11:37:35
 * @version $Id$
 */
//导航划入划出
function navToggle () {
	$("nav").stop().slideToggle();
	$(".shade").toggle();
}
//导航点击
$("#id_nav").on("touchstart",function () {
	navToggle ()	
});
//遮罩层点击
$(".shade").on("touchstart",function () {
	navToggle ()
})


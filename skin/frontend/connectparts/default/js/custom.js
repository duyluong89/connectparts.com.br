jQuery(document).ready(function(){
    var i = 1;
    var _size = jQuery('.marcas-mascara > ul > li').size();
    var _max = _size-2;

    jQuery('.marcas li').eq(1).addClass('grande');

    jQuery('.slot-machine .baixo').click(function(){

        if(i>=_max){
            jQuery('.marcas-mascara > ul').animate({'top':'0px'});
            jQuery('.prat-mascara > ul').animate({'top':'0px'});
            i = 1;
            jQuery('.marcas li').eq(1).addClass('grande');
            return false;
        }else{

            jQuery('.marcas li').removeClass('grande');

            i++;
            jQuery('.marcas > li').eq(i).addClass('grande');
            jQuery('.marcas-mascara > ul').animate({'top':'-=105px'});
            jQuery('.prat-mascara > ul').animate({'top':'-=365px'});
        }
        return false;
    });

    jQuery('.slot-machine .cima').click(function(){

        if(i<=1){
            jQuery('.marcas-mascara > ul').animate({'top':'0px'});
            jQuery('.prat-mascara > ul').animate({'top':'0px'});
            jQuery('.marcas li').eq(10).addClass('grande');
            i=_max;
            return false;
        }else{
            jQuery('.marcas li').removeClass('grande');


            i--;
            jQuery('.marcas li').eq(i).addClass('grande');
            jQuery('.marcas-mascara > ul').animate({'top':'+=105px'});
            jQuery('.prat-mascara > ul').animate({'top':'+=365px'});
        }
        return false;
    });
});
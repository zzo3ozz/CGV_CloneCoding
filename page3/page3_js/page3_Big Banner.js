$.giftstore_bigBanner = function( _targetClassName, _colorAry ){ // Big Banner
  var _target = _targetClassName;
  var _length = $('.' + _target + ' ul li').length;
  var pagerItemW = (100 / _colorAry.length) +'%';

  $('.' + _target).css({'background-color':_colorAry[0]});
  var bigBannerSlider = $('.' + _target + ' ul').bxSlider({
      mode:'fade',
      auto: true,
      autoStart: false,
      autoControls: true,
      pause: 3500,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 980,
      onSliderLoad: function(){
          $('.bx-clone *').attr('tabindex', '-1');
          $('.slide').eq(1).addClass('current');
          $('.slide').not('.current').find('*').attr('tabindex', '-1');
          $('.current').find('a').attr('tabindex', '0');
      },
      onSlideBefore: function($slideElement, newIndex, oldIndex){
          $slideElement.parents('.' + _target).css({'transition':'background-color 1s', 'background-color':_colorAry[oldIndex]});
          $('.slide').removeClass('current');
          current = bigBannerSlider.getCurrentSlide();
          $('.slide').not('.current').find('*').attr('tabindex', '-1');
          $('.slide.current').find('a').attr('tabindex', '0');
          $('.slide:not(.bx-clone)').eq(current).addClass('current');   
      },
      onSlideAfter: function(){
          $('.slide').not('.current').find('*').attr('tabindex', '-1');
          $('.slide.current').find('a').attr('tabindex', '0');
      }
  });
  
  if(_length <= 1){$('.' + _target + ' .bx-controls').css({'display':'none'});}

  $('.' + _target + ' .bx-pager-item').css({'width':pagerItemW});
}

$.giftstore_fixObj = function( _this, $contents_wrap, $category_content, $giftstore_logo){ 
    var isScroll;
    var fixObj = $contents_wrap;
    var fixObjTop = fixObj.offset().top;

    $(_this).on({
        scroll:function(){
            isScroll = true;
        }
    });

    var fixedTopInterval = setInterval(function(){
        if(isScroll){
            hasScrolled();
            isScroll = false;
        }
    }, 250);

    function hasScrolled(){
        var _target = $(_this);
        var scrollTop = _target.scrollTop() + 50;
        
        if(scrollTop >= fixObjTop){
            fixObj.parent().addClass('fixed_top');
            /*if(!$category_content.is(':animated')){
            $giftstore_logo.fadeIn();
            $category_content.stop().animate({
                'padding-left':$giftstore_logo.outerWidth() + 'px',
                'max-width':'630px'
            }, 'fast');
            }*/
        }else{
            fixObj.parent().removeClass('fixed_top');
            /*if(!$category_content.is(':animated')){
            $category_content.stop().animate({
                'padding-left':'0',
                'max-width':'740px'
            }, 'fast');
            $giftstore_logo.fadeOut('fast');
            }*/
        }
    }
}


$.giftstore_targetBanner = function( _targetClassName, _colorObj ){ 
    var _target = _targetClassName;
    var _length = $('.' + _target + ' ul li').length;
        /* Description : _colorObj {
            'bgColor':['#ad7b58','#000','#ccc'],
            'titleColor':['#fff','#fff','#fff'],
            'contentsColor':['#fff','#fff','#fff']
        }
        */

    for(var i=0; i < _length; i++){
        $('.' + _target + ' ul li:eq(' + i + ') a').css({'background-color': _colorObj.bgColor[i], 'color': _colorObj.contentsColor[i]});
        $('.' + _target + ' ul li:eq(' + i + ') strong').css({'color': _colorObj.titleColor[i]});  
    }
   
    
    /*$('.' + _target + ' ul').bxSlider({
        auto: true,
        autoStart: false,
        pause: 3500,
        controls:false,
        slideWidth: 902
    });*/
    


    var targetBannerSlider = $('.' + _target + ' ul').bxSlider({
        auto: true,
        autoStart: false,
        pause: 3500,
        controls:false,
        slideWidth: 902,
        onSliderLoad: function(){
          
          $('.bx-clone *').attr('tabindex', '-1');
    
          $('.slide').eq(1).addClass('current');
    
          $('.slide').not('.current').find('*').attr('tabindex', '-1');
    
          $('.current').find('a').attr('tabindex', '0');
    
        },
        onSlideBefore: function(){
          $('.slide').removeClass('current');
    
          current = targetBannerSlider.getCurrentSlide();
    
          $('.slide').not('.current').find('*').attr('tabindex', '-1');
    
          $('.slide.current').find('a').attr('tabindex', '0');
    
          $('.slide:not(.bx-clone)').eq(current).addClass('current');   
    
        },
        onSlideAfter: function(){
          $('.slide').not('.current').find('*').attr('tabindex', '-1');
    
          $('.slide.current').find('a').attr('tabindex', '0');
        }
    });
  
    if(_length <= 1){$('.' + _target + ' .bx-controls').css({'display':'none'});}
}





$.giftstore_hotdeal = function( _targetClassName, _cntObj ){ 

    var _target = _targetClassName;
    var _length = $('.' + _target + ' ul.bxslider li').length;
    var viewCnt;
    var interval;

    switch( _targetClassName ){
        case 'category_product_detail_wrap':   
            viewCnt = 1;

            if(_length <= viewCnt){
                $('.' + _target + ' .soldout').addClass('soldout1');
            }else{
                var hotdealSlider = $('.' + _target + ' ul.bxslider').bxSlider({
                    autoStart: false,
                    autoControls: false,
                    slideWidth: 420,
                    onSliderLoad: function(){
                        $('.bx-clone *').attr('tabindex', '-1');
                        $('.slide').eq(1).addClass('current');
                        $('.slide').not('.current').find('*').attr('tabindex', '-1');
                        $('.current').find('a').attr('tabindex', '0');
                    },
                    onSlideBefore: function(){
                        $('.slide').removeClass('current');
                        current = hotdealSlider.getCurrentSlide();
                        $('.slide').not('.current').find('*').attr('tabindex', '-1');
                        $('.slide.current').find('a').attr('tabindex', '0');
                        $('.slide:not(.bx-clone)').eq(current).addClass('current'); 
                    },
                    onSlideAfter: function(){
                        $('.slide').not('.current').find('*').attr('tabindex', '-1');
                        $('.slide.current').find('a').attr('tabindex', '0');
                    }
                });
            }
        break;
        case 'hotdeal_wrap':   
            viewCnt = 3;

            if(_length <= viewCnt){
            }else{
                var hotdealSlider = $('.' + _target + ' ul.bxslider').bxSlider({
                    autoStart: false,
                    autoControls: false,
                    pager: false,
                    minSlides: viewCnt,
                    maxSlides: viewCnt,
                    moveSlides:1,
                    slideMargin:45,
                    slideWidth: 270,
                    onSliderLoad: function(){
                        $('.bx-clone *').attr('tabindex', '-1');
                        $('.slide').eq(1).addClass('current');
                        $('.slide').not('.current').find('*').attr('tabindex', '-1');
                        $('.current').find('a').attr('tabindex', '0');
                    },
                      onSlideBefore: function(){
                        $('.slide').removeClass('current');
                        current = hotdealSlider.getCurrentSlide();
                        $('.slide').not('.current').find('*').attr('tabindex', '-1');
                        $('.slide.current').find('a').attr('tabindex', '0');
                        $('.slide:not(.bx-clone)').eq(current).addClass('current'); 
                      },
                      onSlideAfter: function(){
                        $('.slide').not('.current').find('*').attr('tabindex', '-1');
                        $('.slide.current').find('a').attr('tabindex', '0');
                    }
                });
            }
        break;
    }

    var cntObj = _cntObj;

    initSetDisplayCnt(cntObj);

    
    function timeout(){
        var cntLen = cntObj.length;
        
        for(var i = 0; i < cntLen; i++){
            $target = $("." + cntObj[i].target);

            if($.dDaySetTime(cntObj[i].time).hour00 != $.dDaySetTime(cntObj[i].time).prevHour00){
                $.fn.setDisplayCnt($('.' + cntObj[i].target), cntObj[i].time);
            }
            
            if($.dDaySetTime(cntObj[i].time).hour0 != $.dDaySetTime(cntObj[i].time).prevHour0){
                $.fn.setDisplayCnt($('.' + cntObj[i].target), cntObj[i].time);
            }
            
            if($.dDaySetTime(cntObj[i].time).min00 != $.dDaySetTime(cntObj[i].time).prevMin00){
                $.fn.setDisplayCnt($('.' + cntObj[i].target), cntObj[i].time);
            }
            
            if($.dDaySetTime(cntObj[i].time).min0 != $.dDaySetTime(cntObj[i].time).prevMin0){
                $.fn.setDisplayCnt($('.' + cntObj[i].target), cntObj[i].time);
            }
            
            if($.dDaySetTime(cntObj[i].time).sec00 != $.dDaySetTime(cntObj[i].time).prevSec00){
                $.fn.setDisplayCnt($('.' + cntObj[i].target), cntObj[i].time);
                
             }
            
            if($.dDaySetTime(cntObj[i].time).sec0 != $.dDaySetTime(cntObj[i].time).prevSec0){
                $.fn.setDisplayCnt($('.' + cntObj[i].target), cntObj[i].time);
            }
            cntObj[i].time -= 1;

            if(cntObj[i].time < 0){
                clearInterval(interval);
                fnReloadDealList();
            }
        }
    }

    function initSetDisplayCnt(_target){

        var cntObjLen = _target.length;

        if( cntObjLen > 0){
            interval = setInterval(timeout, 1000);
        }else{
        }

        for(var i = 0; i < cntObjLen; i++){
            $target = $("." + _target[i].target);

            var $hotdealRestItems = $target.children('.hotdeal_rest_items');
             $hotdealRestItems.text(_target[i].restItems);    

             $.fn.setDisplayCnt($target, _target[i].time);
        }
    }
}


$.dDaySetTime = function(_num){
    var currentTime = _num;
    var prevTime = (currentTime != 0)?(currentTime - 1):0;

    var _day = Math.floor(currentTime / 60 / 60 / 24);
    var _hour = Math.floor(currentTime / 60 / 60) - (_day * 24 );
    var _min = Math.floor(currentTime / 60) - (_day * 24 * 60) - (_hour * 60) ;
    var _sec = Math.floor(currentTime) - (_day * 24 * 60 * 60) - (_hour * 60 * 60) - (_min * 60);

    var _prevDay = Math.floor(prevTime / 60 / 60 / 24);
    var _prevHour = Math.floor(prevTime / 60 / 60) - (_prevDay * 24 );
    var _prevMin = Math.floor(prevTime / 60) - (_prevDay * 24 * 60) - (_prevHour * 60) ;
    var _prevSec = Math.floor(prevTime) - (_prevDay * 24 * 60 * 60) - (_prevHour * 60 * 60) - (_prevMin * 60);

    function numArr( _num ){
        var numAry = [];
        if(_num < 10){
            numAry[0] = 0;
            numAry[1] = _num;
        }else{
            numAry[0] = Number(String(_num).substr(0, 1));
            numAry[1] = Number(String(_num).substr(1, 1));
        }
        return numAry;
    }

    var obj = {
        'day': _day,
        'hour00': numArr(_hour)[0],
        'hour0': numArr(_hour)[1],
        'min00': numArr(_min)[0],
        'min0': numArr(_min)[1],
        'sec00': numArr(_sec)[0],
        'sec0': numArr(_sec)[1],
        'prevDay': _prevDay,
        'prevHour00': numArr(_prevHour)[0],
        'prevHour0': numArr(_prevHour)[1],
        'prevMin00': numArr(_prevMin)[0],
        'prevMin0': numArr(_prevMin)[1],
        'prevSec00': numArr(_prevSec)[0],
        'prevSec0': numArr(_prevSec)[1]
    }
    return obj;
}


$.fn.setDisplayCnt = function(_target, _time){
    var $target = _target;
    var timeObj = $.dDaySetTime(_time) ;

    var $hotdealDDay = $target.children('.hotdeal_dday');
    var $hour00 = $target.find('.hour00');
    var $hour0 = $target.find('.hour0');
    var $min00 = $target.find('.min00');
    var $min0 = $target.find('.min0');
    var $sec00 = $target.find('.sec00');
    var $sec0 = $target.find('.sec0');
    
    $hotdealDDay.text(timeObj.day);

    $hour00.text(timeObj.hour00);
    $hour0.text(timeObj.hour0);
    $min00.text(timeObj.min00);
    $min0.text(timeObj.min0);
    $sec00.text(timeObj.sec00);
    $sec0.text(timeObj.sec0);
    
    $hour00.attr('data-hour00', timeObj.prevHour00);
    $hour0.attr('data-hour0', timeObj.prevHour0);
    $min00.attr('data-min00', timeObj.prevMin00);
    $min0.attr('data-min0', timeObj.prevMin0);
    $sec00.attr('data-sec00', timeObj.prevSec00);
    $sec0.attr('data-sec0', timeObj.prevSec0);
}



$.giftstore_giftRecommend = function( _targetClassName ){ 
    var _target = _targetClassName;
    var _length = $('.' + _target + ' ul li').length;
  
    if(_length <= 3){
        $('.' + _target + ' ul').css({'font-size':'0'})
        $('.' + _target + ' ul li').css({'display':'inline-block', 'width':'303px'})
    }else{
        var giftRecommendSlider = $('.' + _target + ' ul.bxslider').bxSlider({
            autoStart: false,
            autoControls: false,
            pager: false,
            minSlides: 3,
            maxSlides: 3,
            moveSlides:1,
            slideMargin:2,
            slideWidth: 303,
            onSliderLoad: function(){
                $('.bx-clone *').attr('tabindex', '-1');
                $('.slide').eq(1).addClass('current');
                $('.slide').not('.current').find('*').attr('tabindex', '-1');
                $('.current').find('a').attr('tabindex', '0');
            },
              onSlideBefore: function(){
                $('.slide').removeClass('current');
                current = giftRecommendSlider.getCurrentSlide();
                $('.slide').not('.current').find('*').attr('tabindex', '-1');
                $('.slide.current').find('a').attr('tabindex', '0');
                $('.slide:not(.bx-clone)').eq(current).addClass('current'); 
              },
              onSlideAfter: function(){
                $('.slide').not('.current').find('*').attr('tabindex', '-1');
                $('.slide.current').find('a').attr('tabindex', '0');
            }
        });
    }
}




$.giftstore_togetherView = function( _targetClassName ){
    var _target = _targetClassName;
    var _length = $('.' + _target + ' ul li').length;

    if(_length <= 4){
        $('.' + _target + ' .com_list_style li').eq(0).css({'margin-left':'48px'});
    }else{
        var togetherViewSlider = $('.' + _target + ' ul').bxSlider({
            autoStart: false,
            autoControls: false,
            pager: false,
            minSlides: 4,
            maxSlides: 4,
            moveSlides:1,
            slideMargin:28,
            slideWidth: 200,
            onSliderLoad: function(){
                $('.bx-clone *').attr('tabindex', '-1');
                $('.slide').eq(1).addClass('current');
                $('.slide').not('.current').find('*').attr('tabindex', '-1');
                $('.current').find('a').attr('tabindex', '0');
            },
              onSlideBefore: function(){
                $('.slide').removeClass('current');
                current = togetherViewSlider.getCurrentSlide();
                $('.slide').not('.current').find('*').attr('tabindex', '-1');
                $('.slide.current').find('a').attr('tabindex', '0');
                $('.slide:not(.bx-clone)').eq(current).addClass('current'); 
              },
              onSlideAfter: function(){
                $('.slide').not('.current').find('*').attr('tabindex', '-1');
                $('.slide.current').find('a').attr('tabindex', '0');
            }
        });

    }
}

$.fn.addComma = function(num){
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

$.fn.comFormNumberCnt = function(_cntTargetClassName, _totalPricegetClassName, _totalPriceTargetClassName, _increase, _minCnt, _maxCnt){
    var _firstCnt = Number($("." + _cntTargetClassName).text());
    var _currentPrice = $("." + _totalPriceTargetClassName).text().replace(/[^\d]+/g,'');
    var _onePrice = Number(_currentPrice / _firstCnt);
    
    var _currentCnt =  _firstCnt + _increase;

    if(_currentCnt <= _minCnt){
        _currentCnt = 1;
    }else if(_currentCnt > _maxCnt){
        if(_maxCnt <= 0){
            _currentCnt = 1;
        }else{
            _currentCnt = _maxCnt;
            alert("");
        }
    }else{
        _currentCnt =  _firstCnt + _increase;
    }
    var _totalPrice = $.fn.addComma(_onePrice * _currentCnt);

    $("." + _cntTargetClassName).text(_currentCnt);
    if(_totalPricegetClassName != null){$("." + _totalPricegetClassName).text(_totalPrice);}
    if(_totalPriceTargetClassName != null){$("." + _totalPriceTargetClassName).text(_totalPrice);}

    return this
}

$.fn.comSelectbox = function(_target, badgeClass){
    var $target = $(_target);
    var isDisabled = $target.hasClass('disabled');

    if(!isDisabled){
        if($target.parent().parent().hasClass('active')){
            $target.parent().siblings('dd').slideUp('fast', function(){
                $target.parent().parent().removeClass('active');
            });
        }else{
            $('.com_custom_selectbox.active dd').slideUp('fast', function(){
                $target.parent().parent().removeClass('active');
                $(this).parent().removeClass('active');
                $(this).siblings('dt').removeClass('active');
            });

            $target.parent().siblings('dd').slideDown('fast', function(){
                $target.parent().parent().addClass('active');
            });
        }
        var isBadge = $target.parent('dt').hasClass(badgeClass);
        
        (isBadge)?$target.parent('dt').removeClass('active'):$target.parent('dt').addClass('active')
        
    }
}


$.fn.comCloseSelectbox = function(_target){
    var $target = $('.' + _target);
    $target.parent().parent().removeClass('active');
    $target.parent().removeClass('active'); 
    $target.parent().siblings('dd').hide();
}

$.fn.setSelectboxValue = function(_target, _totalPricegetClassName, _totalPriceTargetClassName ){
    var $target = $(_target);
    var targetVal = $target.text();

    var cardCode = _target.className.match(/cards_.../) || null;

    if(cardCode != null ){
        $target.parent().siblings('dt').prop('class', 'active').addClass(cardCode[0]).children().text(targetVal);
    }

    $('.' + _totalPricegetClassName).text(targetVal);
    $('.' + _totalPriceTargetClassName).text(targetVal);

    $target.parent().parent().find('dd').slideUp('fast', function(){
        $target.parent().parent().removeClass('active');
    });
}


$.fn.comFormAddPrductPrice = function(_currentTarget, _cntTargetClassName, _productClassName, _increase, _minCnt, _maxCnt, _type, _checkboxList, _addClassName, _totalClassName, _productCloneClassName){

    var $cnt = $("." + _cntTargetClassName);            
    var $checkboxList = $("." + _checkboxList);         
    var $productTarget = $("." + _productClassName);    
    var $addTarget = $("." + _addClassName);            
    var $totalTarget = $("." + _totalClassName);       
    var $productCloneTarget = $("." + _productCloneClassName);
    var _addPrice = 0;
    
    switch(_type){
        case 'counter':
            var _firstCnt = Number($cnt.text());
            var _currentPrice = Number($productTarget.text().replace(/[^\d]+/g,''));
            var _onePrice = Number(_currentPrice / _firstCnt);
            var _currentCnt =  _firstCnt + _increase;

            if(_currentCnt <= _minCnt){
                _currentCnt = 1;
            }else if(_currentCnt > _maxCnt){
                _currentCnt = _maxCnt;
                alert("");
            }else{
                _currentCnt =  _firstCnt + _increase;
            }
            
            $cnt.text(_currentCnt);

            $checkboxList.find('li').each(function(idx){
                if($(this).hasClass('active')){
                    _addPrice +=(Number($(this).find('.add_product_price').text().replace(/[^\d]+/g,'')));
                }
            });
            $addTarget.text($.fn.addComma(_addPrice * Number($cnt.text())));
            $productTarget.text($.fn.addComma(_onePrice * Number($cnt.text())));
            $productCloneTarget.text($productTarget.text());
            
            break;
        case 'checkbox':
            $(_currentTarget).parent('li').toggleClass('active');
            $checkboxList.find('li').each(function(idx){
                if($(this).hasClass('active')){
                    _addPrice +=(Number($(this).find('.add_product_price').text().replace(/[^\d]+/g,'')));
                }
            });
            $addTarget.text($.fn.addComma(_addPrice * Number($cnt.text())));
            break;
        default: break;
    }

    var _totalPrice = $.fn.addComma(Number($addTarget.text().replace(/[^\d]+/g,'')) + Number($productTarget.text().replace(/[^\d]+/g,'')));
    $totalTarget.text($.fn.addComma(_totalPrice));

    return this;
}



$.comFormCheckbox = function(_allCheckClassName, _checkClassName, _delClassName){
    var $allCheckbox = $('.' +  _allCheckClassName);
    var $delElement = $('.' +  _delClassName);
    
    $('input[type="checkbox"]').on({
        change:function(e){
            var _target = e.target;
            var isAllChecker = $allCheckbox.is(':checked');

            if($(_target).hasClass(_checkClassName)){   // 1Depth check
                var checkboxLen;
                var checkboxTotalLen = $('.' +  _checkClassName).not('.' + _allCheckClassName).length;

                if($(_target).hasClass(_allCheckClassName)){
                    $('.' +  _checkClassName).prop('checked', isAllChecker);
                }

                checkboxLen = $('.' +  _checkClassName + ':checked').not('.' + _allCheckClassName).length;

                if(checkboxLen <= 0){
                    $allCheckbox.prop('checked', false);
                    $delElement.children('span').hide();
                }else if(checkboxLen == checkboxTotalLen){
                    $allCheckbox.prop('checked', true);
                    $delElement.children('span').show().text(checkboxLen);
                }else{
                    $allCheckbox.prop('checked', false);
                    $delElement.children('span').show().text(checkboxLen);
                }
            }else{
            }
        }
    });
}


$.fn.comFormCustumSelectbox = function(_currentTarget){
    var $target = $(_currentTarget);

    if($target.siblings('.com_custom_checkbox_wrap').is(':hidden')){
        $target.addClass('active');
        $target.parent().animate({
            'padding-bottom':'231px'
        }, function(){
            $target.parent().next('li').css({'border-top-color':'transparent'});
        });
    }else{
        $target.parent().animate({
            'padding-bottom':'0'
        }, function(){
            $target.parent().next('li').css({'border-top-color':'#d6d6d6'});
            $target.removeClass('active');
        });
    }
}

$.comFormRadio = function(_checkClassName){
    var $target = $('.' +  _checkClassName);

    $target.find('input[type="radio"]').on({
        change:function(e){
            var _target = e.target;
            if($(_target).hasClass('kakaopay')){ 
                $target.find('.com_custom_selectbox').removeClass('active').children('dd').hide();
                $target.next().show();
            }else{  
                $target.next().hide();
            }
        }
    });
}

$.fn.comMultiCheckboxChecker = function(){
    if(arguments.length > 0){
        var $targetWrap = $('.' + arguments[0]);
        var aryClassName = [];
         for(var i = 0; i < arguments.length; i++){
             aryClassName[i] = arguments[i];
         }
        
        $('input[type="checkbox"]').on({
            change:function(e){
                if($(e.target).hasClass(aryClassName[1])){
                    if($(e.target).is(':checked')){
                        $targetWrap.find('input[type="checkbox"]').prop('checked', true);
                    }else{
                        $targetWrap.find('input[type="checkbox"]').prop('checked', false);
                    }
                }else if($(e.target).hasClass(aryClassName[2])){
                    var _isAllCheck = true;
                    
                    if($(e.target).is(':checked')){
                        $(e.target).parent().nextUntil('dt').children('input[type="checkbox"]').prop('checked', true);
                    }else{
                        $(e.target).parent().nextUntil('dt').children('input[type="checkbox"]').prop('checked', false);
                    }

                    $targetWrap.find('.' + aryClassName[2]).each(function(idx){
                        if($(this).data('required')){
                            _isAllCheck *= $(this).is(':checked');
                        }
                    });

                    $('.' + aryClassName[1]).prop('checked', _isAllCheck);
                }else{
                    var _isAllParticleCheck = true;
                    
                    var gName = ($(e.target).data('group'));
                    
                    $targetWrap.find('dd input[data-group="' + gName +'"]').each(function(idx){
                        if($(this).data('required')){
                            _isAllParticleCheck *= $(this).is(':checked');
                        }
                    });
                    
                    $targetWrap.find('dt input[data-group="' + gName +'"]').prop('checked', _isAllParticleCheck);
                    
                    var _isAllCheck = true;

                    $targetWrap.find('.' + aryClassName[2]).each(function(idx){
                        if($(this).data('required')){
                            _isAllCheck *= $(this).is(':checked');
                        }
                    });

                    $('.' + aryClassName[1]).prop('checked', _isAllCheck);
                }
            }
        });
    }
}


$.fn.comPopupLayer = function(_target, _state, _targetClassName, _bgOpacity){
        _state  :
            - true : open
            - false : close
        _targetClassName : no className
        _bgOpacity : Dim opacity (0 ~ 1)
    */

    if(_state){
        $('.com_pop_wrap, .' + _targetClassName).show();
        $('.com_pop_fog').css({'opacity':_bgOpacity});
        var popW = -1 * $('.' + _targetClassName).outerWidth() / 2 + 'px';
        var popH = -1 * $('.' + _targetClassName).outerHeight() / 2 + 'px';

        $('.' + _targetClassName).css({'margin-left': popW,'margin-top': popH});


        $('.com_pop_btn_close, .com_pop_fog').off('click').on({
            click:function(){
                $.fn.comClosePopupLayer();
            }
        });

    }else{
        $('.com_pop_wrap').hide();

    }
    return this;
}

$.fn.comClosePopupLayer = function(){
    $('.com_pop_wrap, .com_pop').hide();
}



$.fn.comAccrodionMenu = function(_target, _accrodionTarget){
    var $target = $(_target).parent();
    var _isState = $target.hasClass('active');

    if(_isState){   
        $target.children('.' + _accrodionTarget).slideUp('fast',function(){
            $target.removeClass('active');
        });
    }else{  
        $target.children('.' + _accrodionTarget).slideDown('fast',function(){
            $target.addClass('active');
        });
    }
}

$.fn.focusSet = function($target, _className){
    $target.on({
        "mouseenter focusin":function(){
            $(this).parents('ul').find('dd').removeClass(_className);
            $(this).addClass(_className);
        },
       
        "mouseleave focusout":function(){
            $(this).removeClass(_className);
        }
    });
}

$.fn.focusSet1 = function($target, _className){
    $target.on({
        "mouseenter focusin":function(){
            $(this).parents('ul').find('dd').removeClass(_className);
            $(this).addClass(_className);
        },
       
        "mouseleave focusout":function(){
            $(this).removeClass(_className);
        }
    });
}





$.fn.comTab = function(_tabTitleClassName, _tabContentsClassName){
    var $tabTitle = $('.' + _tabTitleClassName)
    var $tabContent =$('.' + _tabContentsClassName)
    $tabTitle.on({
        click:function(e){
            e.preventDefault();
    
            var _target = e.target;
            var _idx = $(_target).parents('li').index();
            
            $tabTitle.find(' > li:eq(' + _idx + ')').addClass('active').siblings('li').removeClass('active');
            $tabContent.find(' > li:eq(' + _idx + ')').addClass('active').siblings('li').removeClass('active');
        }
    })
}

$.fn.asideRePosition = function(){
    var $aside = $(this);
    $aside.css({ 'left': getReLeftPosition(), 'z-index':'99'});
    $(window).on({
        resize:function(){
            $aside.css({ 'left': getReLeftPosition() });
        }
    });

    function getReLeftPosition() {
        var left = 980 + ($('.foot ul').offset()['left'] + 20);
        return left;
    }

}


$.fn.dimedPopUp = function(_isShow, _target, _opacity){
    var $target = $('.' + _target);

    if(_isShow){
        $target.show();
        $target.children('.com_pop_fog').css({'opacity':_opacity});
    }else{
        $target.hide()
    }

}
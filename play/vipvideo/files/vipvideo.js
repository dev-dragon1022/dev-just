document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮和输入框元素
    var playBtn = document.querySelector('.v-play-btn');
    var inputBox = document.querySelector('.v-inp');
    var iframe = document.querySelector('.v-iframe');
		var vipline = document.querySelector('#vip-line');
		var vinfo = document.querySelector('.v-info');

    // 给按钮添加点击事件
    playBtn.addEventListener('click', function() {
        
        var inputValue = inputBox.value.trim(); // 获取输入框中的值
				var vipsrc = vipline.value.trim(); //获取线路

        //如果输入框中有值，则将值赋给 iframe 的 src 属性
        if (inputValue) {
            // 判断地址URL是否有效
            if (isValidUrl(inputValue)) {
								vinfo.style.display = 'none';
								iframe.style.display = 'inline-block';
                iframe.src = vipsrc + inputValue;
            } else {
                alert('请输入有效的视频地址！');
            }
        } else {
            alert('请输入视频地址！');
        }
    });

    //判断是否为有效的 URL
    function isValidUrl(url) {
        // 使用正则表达式验证 URL 格式
        var pattern = /^(http|https):\/\/[\w-]+(\.[\w-]+)+([\w-.,@?^=%&:/~+#]*)?$/;
        return pattern.test(url);
    }
		
		
		// 显示公众号pop
		var aTag = document.querySelector('.footer-gzh');
		var asideTag = document.querySelector('.gzh-pop');
		aTag.addEventListener('mouseover', function() {
		  asideTag.style.display = 'block'; // 显示aside标签内容
		});
		aTag.addEventListener('mouseout', function() {
		  asideTag.style.display = 'none'; // 隐藏aside标签内容
		});
		
});
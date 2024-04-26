document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮和输入框元素
    var playBtn = document.querySelector('.v-play-btn');
    var inputBox = document.querySelector('.v-inp');
    var iframe = document.querySelector('.v-iframe');
		var vipsrc = 'https://jx.m3u8.tv/jiexi/?url=' //vip通用
		//var vipsrc1 = 'https://jx.xmflv.com/?url=' //vip通用2
		//var vipsrc2 = 'https://jx.jsonplayer.com/player/?url=' //通用高速接口
		//var vipsrc3 = 'https://jx.777jiexi.com/player/?url='; //vip电视剧
		//var vipsrc4 = 'http://www.wpsseo.cn/line.php?n=7&url=' //vip电影/电视
		//var vipsrc5 = 'https://jx.xmflv.com/?url=' //线路1
		//var vipsrc6 = 'https://jx.xyflv.cc/?url==' //线路2
		//var vipsrc7 = 'https://im1907.top/?jx=' //线路3

    // 给按钮添加点击事件
    playBtn.addEventListener('click', function() {
        // 获取输入框中的值
        var inputValue = inputBox.value.trim();

        // 如果输入框中有值，则将值赋给 iframe 的 src 属性
        if (inputValue) {
            // 判断输入的是否为有效的 URL，这里仅作示例，实际上应该有更严格的判断逻辑
            if (isValidUrl(inputValue)) {
                iframe.src = vipsrc + inputValue;
								console.log(iframe.src);
            } else {
                alert('请输入有效的视频地址！');
            }
        } else {
            alert('请输入视频地址！');
        }
    });

    // 判断是否为有效的 URL
    function isValidUrl(url) {
        // 使用正则表达式验证 URL 格式
        var pattern = /^(http|https):\/\/[\w-]+(\.[\w-]+)+([\w-.,@?^=%&:/~+#]*)?$/;
        return pattern.test(url);
    }
});
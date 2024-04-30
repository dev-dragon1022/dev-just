// by Just. Liu
// v0.0.1


const app = Vue.createApp({	
  data() {
    return {
			
    }
  },
  mounted() {
		
		// 显示公众号pop
		var aTag = document.querySelector('.footer-gzh');
		var asideTag = document.querySelector('.gzh-pop');
		aTag.addEventListener('mouseover', function() {
		  asideTag.style.display = 'block'; // 显示aside标签内容
		});
		aTag.addEventListener('mouseout', function() {
		  asideTag.style.display = 'none'; // 隐藏aside标签内容
		});
		
	},
	computed: {
		
	},
  methods: {
		// 回到顶部
		// top(){
		// 	window.scrollTo({
		// 	        top:0,
		// 	        behavior:"smooth"
		// 	    })
		// }
  }
})

app.mount('#app');

// by Just. Liu


const app = Vue.createApp({	
  data() {
    return {
			items: [],
			designType: 0,
			designClass: 0,
			devType: 1,
			devClass: 0
    }
  },
  mounted() {
		axios.get('data/data.json').then(response => {
			this.items = response.data;
		}).catch(error => {
			console.log(error);
		});
		
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
		
		// 设计数据items
		designItems() {
				return this.items.filter(item => item.type === this.designType && item.class === this.designClass).slice().reverse();
		},
		
		// 前端数据items
		devItems() {
				return this.items.filter(item => item.type === this.devType && item.class === this.devClass).slice().reverse();
		}
		
		
	},
  methods: {
		// 设计tab
		selectDesignTab(type, clazz) {
			this.designType = type;
			this.designClass = clazz;
		},
		// 前端tab
		selectDevTab(type, clazz) {
			this.devType = type;
			this.devClass = clazz;
		}
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
